import { faMagnifyingGlass, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import classes from "./App.module.scss";
import { CountryBox } from "./components/CountryBox";
import { DropdownOption, FilterDropdown } from "./components/FilterDropdown";
import { Country } from "./models/Country";

function App() {
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
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.topBar}>
            <h1>Where in the world?</h1>
            <a href="#">
              <FontAwesomeIcon
                icon={faMoon}
                style={{ color: "#ffffff" }}
                className={classes.darkModeIcon}
              />
              Dark Mode
            </a>
          </div>
        </div>
        <div className={classes.mainSection}>
          <div className={classes.searchBar}>
            <div className={classes.searchWrapper}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#ffffff" }}
              />
              <input
                type="text"
                placeholder="Search for a country..."
                onInput={(e) => onSearchChange(e.currentTarget.value)}
              ></input>
            </div>
            <FilterDropdown options={regions} onSelect={onRegionSelected} />
          </div>
          <div className={classes.countriesList}>{countryBoxes}</div>
        </div>
      </div>
    </>
  );
}

export default App;
