import {
  MenuItem,
  Select,
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

function TweetSelect({
  handleChange,
  label,
  name,
  menuItems,
  value,
  ...props
}) {
  const classes = useStyles(props);

  return (
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
  );
}

TweetSelect.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TweetSelect.defaultProps = {
  label: undefined,
  handleChange: undefined,
  name: undefined,
  menuItems: undefined,
  value: undefined,
};

export default TweetSelect;
