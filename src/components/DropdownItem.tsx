import { styled } from "styled-components";
import { DropdownOption } from "./FilterDropdown";

type Props = {
  option: DropdownOption;
  isSelected: boolean;
  onClick: (option: DropdownOption) => void;
};

const DropdownItemBox = styled.div`
  padding: 0.25rem 0;
  cursor: pointer;
  user-select: none;
`;

export const DropdownItem = (props: Props) => {
  return (
    <DropdownItemBox onClick={() => props.onClick(props.option)}>
      {props.option.label}
    </DropdownItemBox>
  );
};
