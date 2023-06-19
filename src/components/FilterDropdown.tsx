import classes from "./FilterDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DropdownItem } from "./DropdownItem";

export interface DropdownOption {
  id: string;
  label: string;
}

type Props = {
  options: DropdownOption[];
};

export const FilterDropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownOption | null>(null);

  const selectOption = (option: DropdownOption) => {
    setSelectedItem(option);
    setIsOpen(false);
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
    <div className={classes.dropdown}>
      <div
        className={classes.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={classes.label}>
          {selectedItem?.label ?? "Filter by Region"}
        </div>
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#ffffff" }} />
      </div>
      {isOpen && <div className={classes.dropdownMenu}>{options}</div>}
    </div>
  );
};
