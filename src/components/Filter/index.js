import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

const Filter = ({ label, menuItems, handleSelection, ...props }) => {
  const classes = useStyles(props);

  const [val, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    handleSelection({ name: label.toLowerCase(), value: event.target.value });
  };

  return (
    <Box sx={{ width: 150 }} className={classes.box}>
      <FormControl fullWidth className={classes.form}>
        <InputLabel id={`${label}-id`} className={classes.label}>
          {label}
        </InputLabel>
        <Select
          labelId={`${label}-id`}
          value={val}
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
  label: PropTypes.string,
  handleSelection: PropTypes.func,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      // eslint-disable-next-line react/forbid-prop-types
      value: PropTypes.any,
    })
  ),
};

Filter.defaultProps = {
  label: undefined,
  menuItems: undefined,
  handleSelection: undefined,
};

export default Filter;
