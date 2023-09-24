import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme.totalWidth};
  margin: 0 auto;
  padding: 0.5rem ${(props) => props.theme.pagePadding};
`;

const HeaderContainer = styled.header`
  box-shadow: ${(props) => props.theme.boxShadowColor} 0px 4px 4px;
  background-color: ${(props) => props.theme.elemBg};
`;

const MainTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  appearance: none;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 600;
`;

const DarkModeIcon = styled.span`
  margin-right: 0.5rem;
`;

type NavBarProps = {
  isDarkTheme: boolean;
  onThemeChanged: (newValue: boolean) => void;
};

export default function NavBar({ isDarkTheme, onThemeChanged }: NavBarProps) {
  return (
    <HeaderContainer>
      <HeaderSection>
        <MainTitle>Where in the world?</MainTitle>
        <Link href="#" onClick={() => onThemeChanged(!isDarkTheme)}>
          <DarkModeIcon>
            <FontAwesomeIcon icon={faMoon} />
          </DarkModeIcon>
          Dark Mode
        </Link>
      </HeaderSection>
    </HeaderContainer>
  );
}
