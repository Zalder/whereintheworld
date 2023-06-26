import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";
import { CountryBox } from "../components/CountryBox";
import { DropdownOption, FilterDropdown } from "../components/FilterDropdown";
import { SearchField } from "../components/SearchField";
import { Country } from "../models/Country";

const pagePadding = "5rem";
const totalWidth = "1440px";

const MainSection = styled.div`
  padding: 2.5rem ${pagePadding};
  max-width: ${totalWidth};
  margin: 0 auto;
`;

const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CountriesList = styled.div`
  display: grid;
  grid-gap: 4.5rem;
  justify-content: space-between;
  margin-top: 3rem;
  grid-template-columns: repeat(auto-fit, 16rem);
`;

export const MainPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchText, setSearchText] = useState("");

  const regions: DropdownOption[] = [
    { id: "Africa", label: "Africa" },
    { id: "Americas", label: "America" },
    { id: "Asia", label: "Asia" },
    { id: "Europe", label: "Europe" },
    { id: "Oceania", label: "Oceania" },
  ];

  const onRegionSelected = (option: DropdownOption) => {
    setSelectedRegion(option.id);
  };

  const onSearchChange = (text: string) => {
    setSearchText(text);
  };

  const filteredCountries = useMemo(() => {
    let newCountries: Country[] = countries;
    if (selectedRegion) {
      newCountries = newCountries.filter(
        (elem) => elem.region == selectedRegion
      );
    }

    if (searchText) {
      newCountries = newCountries.filter((elem) =>
        elem.name.common.toLowerCase().startsWith(searchText)
      );
    }

    newCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    return newCountries;
  }, [countries, selectedRegion, searchText]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region"
        );

        setCountries(res.data);
      } catch (err) {
        if (err instanceof Error) console.log(err.message);
      }
    };

    fetchCountries();
  }, []);

  const countryBoxes = filteredCountries.map((e, i) => (
    <CountryBox countryInfo={e} key={i} />
  ));
  return (
    <MainSection>
      <FilterBar>
        <SearchField onSearchChange={onSearchChange} />
        <FilterDropdown options={regions} onSelect={onRegionSelected} />
      </FilterBar>
      <CountriesList>{countryBoxes}</CountriesList>
    </MainSection>
  );
};
