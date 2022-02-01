import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function Filter({ handleSelection, label, menuItems, value, ...props }) {
  const classes = useStyles(props);

  const handleChange = (event) => {
    handleSelection({ name: label.toLowerCase(), value: event.target.value });
  };

  return (
    <Box sx={{ width: 160 }} className={classes.box}>
      <FormControl fullWidth className={classes.form}>
        <InputLabel
          shrink
          id={`${label}-select-label`}
          className={classes.label}
        >
          {label}
        </InputLabel>
        <Select
          labelId={`${label}-select-label`}
          id={`${label}-select`}
          value={value}
          displayEmpty
          onChange={handleChange}
          className={classes.select}
        >
          {menuItems?.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          )) ?? null}
        </Select>
      </FormControl>
    </Box>
  );
}

Filter.propTypes = {
  handleSelection: PropTypes.func,
  label: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Filter.defaultProps = {
  handleSelection: undefined,
  label: undefined,
  menuItems: undefined,
  value: undefined,
};

export default Filter;
