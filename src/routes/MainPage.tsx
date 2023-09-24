import { useState } from "react";
import { styled } from "styled-components";
import CountriesList from "../components/CountriesList";
import { DropdownOption, FilterDropdown } from "../components/FilterDropdown";
import { SearchField } from "../components/SearchField";

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

export const MainPage = () => {
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

  return (
    <MainSection>
      <FilterBar>
        <SearchField onSearchChange={onSearchChange} />
        <FilterDropdown options={regions} onSelect={onRegionSelected} />
      </FilterBar>
      <CountriesList searchText={searchText} regionFilter={selectedRegion} />
    </MainSection>
  );
};
