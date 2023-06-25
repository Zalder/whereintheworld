import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

type Props = {
  onSearchChange: (value: string) => void;
};

const SearchWrapper = styled.div`
  width: 30rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme.elemBg};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
  gap: 1rem;
`;

const SearchInput = styled.input`
  font-weight: 600;
  height: 100%;
  border: none;
  background-color: transparent;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.inputColor};
  }
`;
export const SearchField = (props: Props) => {
  return (
    <SearchWrapper>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} />
      <SearchInput
        type="text"
        placeholder="Search for a country..."
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onSearchChange(e.currentTarget.value)
        }
      ></SearchInput>
    </SearchWrapper>
  );
};
