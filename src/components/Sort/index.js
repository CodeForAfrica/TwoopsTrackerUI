import {
  MenuItem,
  FormControl,
  Select,
  Typography,
  InputBase,
  SvgIcon as MuiSvgIcon,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as KeyboardArrowDown } from "@/twoopstracker/assets/icons/select-dropdown.svg";

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
      {children}
    </FormControl>
  );
}

Sort.propTypes = {
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
  handleSelection: undefined,
  children: undefined,
  label: undefined,
  name: undefined,
  menuItems: undefined,
  value: undefined,
};

export default Sort;
