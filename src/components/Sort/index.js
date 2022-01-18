import {
  MenuItem,
  FormControl,
  Select,
  Typography,
  InputBase,
  Button,
  SvgIcon as MuiSvgIcon,
} from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as KeyboardArrowDown } from "@/twoopstracker/assets/icons/select-dropdown.svg";
import SortDown from "@/twoopstracker/assets/icons/sort-down.svg";
import SortUp from "@/twoopstracker/assets/icons/sort-up.svg";

function SvgIcon(props) {
  const classes = useStyles(props);
  return (
    <MuiSvgIcon
      component={KeyboardArrowDown}
      className={classes.svgSelectIcon}
    />
  );
}

function Sort({
  handleSelection,
  toggleSortOrder,
  isDesc,
  children,
  label,
  name,
  menuItems,
  value,
  ...props
}) {
  const classes = useStyles(props);

  const handleChange = (event) => {
    handleSelection({
      name: name || label.toLowerCase(),
      value: event.target.value,
    });
  };

  return (
    <FormControl fullWidth className={classes.form}>
      <Typography variant="body1" className={classes.label}>
        {label}
      </Typography>
      <Select
        labelId={`${label}-id`}
        value={value}
        defaultValue={value}
        onChange={handleChange}
        className={classes.select}
        IconComponent={SvgIcon}
        placeholder={value}
        input={
          <InputBase
            id={`${label}-id`}
            inputProps={{ "aria-label": `${label}-id` }}
            classes={{
              root: classes.inputBase,
              input: classes.inputBaseInput,
            }}
          />
        }
      >
        {menuItems &&
          menuItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
      <Button
        color="default"
        variant="text"
        size="large"
        onClick={toggleSortOrder}
        classes={{
          root: classes.buttonIcon,
        }}
        startIcon={
          <Image
            layout="fill"
            src={isDesc ? SortDown : SortUp}
            className={classes.large}
          />
        }
      />
    </FormControl>
  );
}

Sort.propTypes = {
  toggleSortOrder: PropTypes.func,
  isDesc: PropTypes.bool,
  handleSelection: PropTypes.func,
  children: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sort.defaultProps = {
  toggleSortOrder: undefined,
  handleSelection: undefined,
  children: undefined,
  label: undefined,
  name: undefined,
  menuItems: undefined,
  value: undefined,
  isDesc: undefined,
};

export default Sort;
