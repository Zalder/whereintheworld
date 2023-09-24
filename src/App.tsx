import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { CountriesStore } from "./CountriesStore";
import NavBar from "./components/NavBar";
import { getAllCountries } from "./countriesApi";
import GlobalStyles from "./globalStyles.css";
import { CountryDetailsPage } from "./routes/CountryDetailsPage";
import { MainPage } from "./routes/MainPage";
import { darkTheme, lightTheme } from "./themes";

const countriesStore = new CountriesStore();

const loadCountryDetails = async (id: string) => {
  const countryDetails = await countriesStore.getCountryById(id);

  const borderCountries = countryDetails.borders
    ? await Promise.all(
        countryDetails.borders.map((e) => countriesStore.getCountryById(e))
      )
    : [];

  return { countryDetails, borderCountries };
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} loader={getAllCountries}></Route>
      <Route
        path="country/:country"
        element={<CountryDetailsPage />}
        loader={({ params }) => loadCountryDetails(params.country ?? "")}
      ></Route>
    </>
  ),
  {
    basename: "/whereintheworld/",
  }
);

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <PageContainer>
          <NavBar isDarkTheme={isDarkTheme} onThemeChanged={setIsDarkTheme} />
          <RouterProvider router={router} />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
