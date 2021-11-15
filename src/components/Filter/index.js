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

const Filter = ({ handleSelection, label, menuItems, value, ...props }) => {
  const classes = useStyles(props);

  const handleChange = (event) => {
    handleSelection({ name: label.toLowerCase(), value: event.target.value });
  };

  return (
    <Box sx={{ width: 160 }} className={classes.box}>
      <FormControl fullWidth className={classes.form}>
        <InputLabel id={`${label}-id`} className={classes.label}>
          {label}
        </InputLabel>
        <Select
          labelId={`${label}-id`}
          value={value}
          onChange={handleChange}
          className={classes.select}
        >
          {menuItems &&
            menuItems.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

Filter.propTypes = {
  handleSelection: PropTypes.func,
  label: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  value: PropTypes.string,
};

Filter.defaultProps = {
  handleSelection: undefined,
  label: undefined,
  menuItems: undefined,
  value: undefined,
};

export default Filter;
