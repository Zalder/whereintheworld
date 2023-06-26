import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import GlobalStyles from "./globalStyles.css";
import { MainPage } from "./routes/MainPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/whereintheworld/" element={<MainPage />}></Route>
  )
);

const darkTheme = {
  background: "hsl(207, 26%, 17%)",
  elemBg: "hsl(209, 23%, 22%)",
  textColor: "hsl(0, 0%, 100%)",
  inputColor: "hsl(0, 0%, 100%)",
  boxShadowColor: "rgba(19, 25, 31, 0.15)",
};

const lightTheme = {
  background: "hsl(0, 0%, 98%)",
  elemBg: "hsl(0, 0%, 100%)",
  textColor: "hsl(200, 15%, 8%)",
  inputColor: "hsl(0, 0%, 52%)",
  boxShadowColor: "rgba(200, 207, 212, 0.57)",
};

const pagePadding = "5rem";
const totalWidth = "1440px";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderSection = styled.div`
  background-color: ${(props) => props.theme.elemBg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${totalWidth};
  margin: 0 auto;
  padding: 0.5rem ${pagePadding};
`;

const DarkModeIcon = styled.span`
  margin-right: 0.5rem;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 600;
`;

const MainTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  appearance: none;
`;

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <PageContainer>
          <HeaderSection>
            <MainTitle>Where in the world?</MainTitle>
            <Link href="#" onClick={() => setIsDarkTheme(!isDarkTheme)}>
              <DarkModeIcon>
                <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
              </DarkModeIcon>
              Dark Mode
            </Link>
          </HeaderSection>
        </PageContainer>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
