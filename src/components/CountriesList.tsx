import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { Country } from "../models/Country";
import { CountryBox } from "./CountryBox";

type CountriesListProps = {
  searchText: string;
  regionFilter: string;
};

const CountriesListContainer = styled.div`
  display: grid;
  grid-gap: 4.5rem;
  justify-content: space-between;
  margin-top: 3rem;
  grid-template-columns: repeat(auto-fit, 16rem);
`;

export default function CountriesList({
  searchText,
  regionFilter,
}: CountriesListProps) {
  const countries = useLoaderData() as Country[];

  let filteredCountries: Country[] = countries;
  if (regionFilter) {
    filteredCountries = filteredCountries.filter(
      (elem) => elem.region == regionFilter
    );
  }

  if (searchText) {
    filteredCountries = filteredCountries.filter((elem) =>
      elem.name.common.toLowerCase().startsWith(searchText)
    );
  }

  filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  return (
    <CountriesListContainer>
      {filteredCountries.map((e, i) => (
        <CountryBox countryInfo={e} key={i} />
      ))}
    </CountriesListContainer>
  );
}
