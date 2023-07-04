import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLoaderData } from "react-router-dom";
import { styled } from "styled-components";
import { Country } from "../models/Country";

const PageContainer = styled.div`
  padding: 3rem 5rem;
  max-width: 1440px;
  margin: auto;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9rem;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 8.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.elemBg};
  appearance: none;
  border: none;
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.boxShadowColor} 0px 4px 4px;
  margin-bottom: 5rem;
  cursor: pointer;
  text-decoration: none;
  box-shadow: ${(props) => props.theme.boxShadowColor} 0px 4px 4px;
`;

const BackIcon = styled.span`
  margin-right: 0.5rem;
`;

const CountryInfoSection = styled.div`
  flex-grow: 1;
`;

const CountryFlag = styled.img`
  width: 35rem;
  height: 25rem;
  object-fit: cover;
`;

const BorderCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  font-size: 14px;
  margin-top: 5rem;
  flex-wrap: wrap;
`;

const BorderCountryLink = styled(Link)`
  display: block;
  background-color: ${(props) => props.theme.elemBg};
  width: 6rem;
  text-align: center;
  padding: 0.25rem 0;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadowColor} 0px 4px 4px;
  text-decoration: none;
`;

const CountryInfoSubheader = styled.h3`
  font-size: 14px;
  margin: 0;
  display: inline-block;
  margin-right: 0.25rem;
`;

const CountryFactsList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 10rem;
  font-size: 14px;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 1rem;
`;

const CountryName = styled.h2`
  font-size: 28px;
`;

type LoaderData = {
  countryDetails: Country;
  borderCountries: Country[];
};

export const CountryDetailsPage = () => {
  const { countryDetails, borderCountries } = useLoaderData() as LoaderData;

  const languages = countryDetails.languages
    ? Object.values(countryDetails.languages).join(", ")
    : "N/A";
  const currencies = countryDetails.currencies
    ? Object.values(countryDetails.currencies)
        .map((e) => e.name)
        .join(", ")
    : "N/A";
  const nativeNames = countryDetails.name.nativeName
    ? Object.values(countryDetails.name.nativeName)
        .map((e) => e.common)
        .join("/")
    : "N/A";

  const capital = countryDetails.capital
    ? countryDetails.capital.join(", ")
    : "N/A";

  const borderCountriesItems = borderCountries.map((e, idx) => (
    <li key={idx}>
      <BorderCountryLink to={`/country/${e.cca3}`}>
        {e.name.common}
      </BorderCountryLink>
    </li>
  ));

  return (
    <PageContainer>
      <BackButton to="/" relative="path">
        <BackIcon>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </BackIcon>
        Back
      </BackButton>
      <MainContent>
        <CountryFlag src={countryDetails.flags.svg}></CountryFlag>
        <CountryInfoSection>
          <CountryName>{countryDetails.name.common}</CountryName>
          <CountryFactsList>
            <li>
              <CountryInfoSubheader>Native Name: </CountryInfoSubheader>
              {nativeNames}
            </li>
            <li>
              <CountryInfoSubheader>Population: </CountryInfoSubheader>
              {countryDetails.population.toLocaleString("en-us")}
            </li>
            <li>
              <CountryInfoSubheader>Region: </CountryInfoSubheader>
              {countryDetails.region}
            </li>
            <li>
              <CountryInfoSubheader>Sub Region: </CountryInfoSubheader>
              {countryDetails.subregion ?? "N/A"}
            </li>
            <li>
              <CountryInfoSubheader>Capital: </CountryInfoSubheader>
              {capital}
            </li>
            <li>
              <CountryInfoSubheader>Top Level Domain: </CountryInfoSubheader>
              {countryDetails.tld[0]}
            </li>
            <li>
              <CountryInfoSubheader>Currencies: </CountryInfoSubheader>
              {currencies}
            </li>
            <li>
              <CountryInfoSubheader>Languages: </CountryInfoSubheader>
              {languages}
            </li>
          </CountryFactsList>
          {borderCountries.length > 0 && (
            <BorderCountriesList>
              <CountryInfoSubheader>Border Countries:</CountryInfoSubheader>
              {borderCountriesItems}
            </BorderCountriesList>
          )}
        </CountryInfoSection>
      </MainContent>
    </PageContainer>
  );
};
