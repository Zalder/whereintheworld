import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Country } from "../models/Country";

const CountryBoxContainer = styled(Link)`
  display: block;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.boxShadowColor} 0px 4px 4px;
  text-decoration: none;
`;

const CountryFlag = styled.img`
  height: 10rem;
  width: 100%;
  display: block;
  object-fit: cover;
`;

const CountryInfo = styled.div`
  font-weight: 400;
  padding: 1.25rem;
  padding-bottom: 2.5rem;
  background-color: ${(props) => props.theme.elemBg};
  width: 100%;
`;

const CountryName = styled.h2`
  margin: 0;
  font-size: 18px;
  margin-bottom: 1rem;
`;

const CountryInfoList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 14px;

  b {
    font-weight: 600;
  }
`;

type Props = {
  countryInfo: Country;
};

export const CountryBox = (props: Props) => {
  const capital = props.countryInfo.capital
    ? props.countryInfo.capital.join(", ")
    : "N/A";

  return (
    <CountryBoxContainer to={`/country/${props.countryInfo.cca3}`}>
      <CountryFlag
        src={props.countryInfo.flags.png}
        alt={props.countryInfo.flags.alt}
      />
      <CountryInfo>
        <CountryName>{props.countryInfo.name.common}</CountryName>
        <CountryInfoList>
          <li>
            <b>Population</b>:{" "}
            {props.countryInfo.population.toLocaleString("en-us")}
          </li>
          <li>
            <b>Region</b>: {props.countryInfo.region ?? "N/A"}
          </li>
          <li>
            <b>Capital</b>: {capital}
          </li>
        </CountryInfoList>
      </CountryInfo>
    </CountryBoxContainer>
  );
};
