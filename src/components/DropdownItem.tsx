import classes from "./DropdownItem.module.scss";
import { DropdownOption } from "./FilterDropdown";

type Props = {
  option: DropdownOption;
  isSelected: boolean;
  onClick: (option: DropdownOption) => void;
};

export const DropdownItem = (props: Props) => {
  return (
    <div
      className={classes.dropdownItem}
      onClick={() => props.onClick(props.option)}
    >
      {props.option.label}
    </div>
  );
};
