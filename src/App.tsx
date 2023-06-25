import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { CountryBox } from "./components/CountryBox";
import { DropdownOption, FilterDropdown } from "./components/FilterDropdown";
import { SearchField } from "./components/SearchField";
import GlobalStyles from "./globalStyles.css";
import { Country } from "./models/Country";

const pagePadding = "5rem";
const totalWidth = "1440px";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderSection = styled.div`
  background-color: ${(props) => props.theme.elemBg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${totalWidth};
  margin: 0 auto;
  padding: 0.5rem ${pagePadding};
`;

const DarkModeIcon = styled.span`
  margin-right: 0.5rem;
`;

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

const Link = styled.a`
  text-decoration: none;
  font-weight: 600;
`;

const MainTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  appearance: none;
`;

const darkTheme = {
  background: "hsl(207, 26%, 17%)",
  elemBg: "hsl(209, 23%, 22%)",
  textColor: "hsl(0, 0%, 100%)",
  inputColor: "hsl(0, 0%, 100%)",
};

const lightTheme = {
  background: "hsl(0, 0%, 98%)",
  elemBg: "hsl(0, 0%, 100%)",
  textColor: "hsl(200, 15%, 8%)",
  inputColor: "hsl(0, 0%, 52%)",
};

export const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

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
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <PageContainer>
          <HeaderSection>
            <MainTitle>Where in the world?</MainTitle>
            <Link href="#" onClick={() => setIsDarkTheme(!isDarkTheme)}>
              <DarkModeIcon>
                <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
              </DarkModeIcon>
              Dark Mode
            </Link>
          </HeaderSection>
          <MainSection>
            <FilterBar>
              <SearchField onSearchChange={onSearchChange} />
              <FilterDropdown options={regions} onSelect={onRegionSelected} />
            </FilterBar>
            <CountriesList>{countryBoxes}</CountriesList>
          </MainSection>
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
