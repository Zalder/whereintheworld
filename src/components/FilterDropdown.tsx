import classes from "./FilterDropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type Props = {
  options: string[];
};

export const FilterDropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = props.options.map((elem, idx) => (
    <div className={classes.dropdownItem} key={idx}>
      {elem}
    </div>
  ));

  return (
    <div className={classes.dropdown}>
      <div
        className={classes.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={classes.label}>Filter by Region</div>
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#ffffff" }} />
      </div>
      {isOpen && <div className={classes.dropdownMenu}>{options}</div>}
    </div>
  );
};
