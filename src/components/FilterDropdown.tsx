import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { styled } from "styled-components";
import { DropdownItem } from "./DropdownItem";

const DropdownContainer = styled.div`
  position: relative;
  width: 12.5rem;
`;

const DropdownButton = styled.div`
  border: none;
  height: 3.5rem;
  padding: 0 1.5rem;
  appearance: none;

  border-radius: 6px;

  background-color: ${(props) => props.theme.elemBg};
  font-size: 14px;
  cursor: pointer;
  user-select: none;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DropdownMenu = styled.div`
  position: absolute;
  left: 0px;
  width: 12.5rem;
  background-color: ${(props) => props.theme.elemBg};
  border-radius: 6px;
  margin: 0.25rem 0;
  padding: 1rem 1.5rem;

  font-size: 14px;

  display: flex;
  flex-direction: column;
`;

export interface DropdownOption {
  id: string;
  label: string;
}

type Props = {
  options: DropdownOption[];
  onSelect?: (option: DropdownOption) => void;
};

export const FilterDropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownOption | null>(null);

  const selectOption = (option: DropdownOption) => {
    setSelectedItem(option);
    setIsOpen(false);
    if (props.onSelect) {
      props.onSelect(option);
    }
  };

  const options = props.options.map((elem, idx) => (
    <DropdownItem
      option={elem}
      key={idx}
      isSelected={selectedItem?.id == elem.id}
      onClick={selectOption}
    />
  ));

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedItem?.label ?? "Filter by Region"}
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#ffffff" }} />
      </DropdownButton>
      {isOpen && <DropdownMenu>{options}</DropdownMenu>}
    </DropdownContainer>
  );
};
