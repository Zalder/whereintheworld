import classes from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function App() {
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
          <div className={classes.countriesList}>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.countryBox}>
              <img src="https://flagcdn.com/w320/de.png" alt="" />
              <div className={classes.countryInfo}>
                <h2>Germany</h2>
                <ul>
                  <li>
                    <b>Population</b>: 81,770,900
                  </li>
                  <li>
                    <b>Region</b>: Europe
                  </li>
                  <li>
                    <b>Capital</b>: Berlin
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
