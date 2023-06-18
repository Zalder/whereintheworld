import classes from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Country } from "./models/Country";
import { CountryBox } from "./components/CountryBox";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

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

  const countryBoxes = countries.map((e, i) => (
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
            <select name="regions" id="regions">
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
          <div className={classes.countriesList}>{countryBoxes}</div>
        </div>
      </div>
    </>
  );
}

export default App;
