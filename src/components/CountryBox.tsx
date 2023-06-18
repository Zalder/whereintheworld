import { Country } from "../models/Country";
import classes from "./CountryBox.module.scss";

type Props = {
  countryInfo: Country;
};

export const CountryBox = (props: Props) => {
  return (
    <div className={classes.countryBox}>
      <img src={props.countryInfo.flagURL} alt="" />
      <div className={classes.countryInfo}>
        <h2>{props.countryInfo.name}</h2>
        <ul>
          <li>
            <b>Population</b>: {props.countryInfo.population}
          </li>
          <li>
            <b>Region</b>: {props.countryInfo.region}
          </li>
          <li>
            <b>Capital</b>: {props.countryInfo.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};