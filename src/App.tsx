import classes from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Country } from "./models/Country";
import { CountryBox } from "./components/CountryBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { DropdownOption, FilterDropdown } from "./components/FilterDropdown";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const regions: DropdownOption[] = [
    { id: "Africa", label: "Africa" },
    { id: "Americas", label: "America" },
    { id: "Asia", label: "Asia" },
    { id: "Europe", label: "Europe" },
    { id: "Oceania", label: "Oceania" },
  ];

  const onRegionSelected = (option: DropdownOption) => {
    const newCountries = countries
      .filter((elem) => elem.region == option.id)
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
    setFilteredCountries(newCountries);
  };

  const filterCountries = (region?: string) => {
    if (region) {
      const newCountries = countries.filter((elem) => elem.region == region);
      setFilteredCountries(newCountries);
    } else {
      setFilteredCountries(countries);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region"
        );
        const newCountries: Country[] = res.data;
        newCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        setCountries(newCountries);
        setFilteredCountries(newCountries);
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
              <input type="text" placeholder="Search for a country..."></input>
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
