import { Link } from "react-router-dom";
import { styled } from "styled-components";

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

const CountryInfoSection = styled.div``;

const CountryFlag = styled.img`
  width: 35rem;
  height: 25rem;
`;

const BorderCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  font-size: 14px;
  margin-top: 5rem;
`;

const BorderCountryLink = styled.a`
  display: block;
  background-color: ${(props) => props.theme.elemBg};
  width: 6rem;
  text-align: center;
  padding: 0.25rem 0;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadowColor} 0px 4px 4px;
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

export const CountryDetails = () => {
  return (
    <PageContainer>
      <BackButton to=".." relative="path">
        Back
      </BackButton>
      <MainContent>
        <CountryFlag src="https://flagcdn.com/be.svg"></CountryFlag>
        <CountryInfoSection>
          <CountryName>Belgium</CountryName>
          <CountryFactsList>
            <li>
              <CountryInfoSubheader>Native Name: </CountryInfoSubheader>Belgie
            </li>
            <li>
              <CountryInfoSubheader>Population: </CountryInfoSubheader>
              11.319.511
            </li>
            <li>
              <CountryInfoSubheader>Region: </CountryInfoSubheader>Europe
            </li>
            <li>
              <CountryInfoSubheader>Sub Region: </CountryInfoSubheader>Western
              Europe
            </li>
            <li>
              <CountryInfoSubheader>Capital: </CountryInfoSubheader>Brussels
            </li>
            <li>
              <CountryInfoSubheader>Top Level Domain: </CountryInfoSubheader>.be
            </li>
            <li>
              <CountryInfoSubheader>Currencies: </CountryInfoSubheader>Euro
            </li>
            <li>
              <CountryInfoSubheader>Languages: </CountryInfoSubheader>Dutch,
              French, German
            </li>
          </CountryFactsList>
          <BorderCountriesList>
            <CountryInfoSubheader>Border Countries:</CountryInfoSubheader>
            <li>
              <BorderCountryLink>France</BorderCountryLink>
            </li>
            <li>
              <BorderCountryLink>Germany</BorderCountryLink>
            </li>
            <li>
              <BorderCountryLink>Netherlands</BorderCountryLink>
            </li>
          </BorderCountriesList>
        </CountryInfoSection>
      </MainContent>
    </PageContainer>
  );
};
