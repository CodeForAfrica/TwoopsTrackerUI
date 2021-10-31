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

const Filter = ({ label, ...props }) => {
  const classes = useStyles(props);

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: 150 }}>
      <FormControl fullWidth className={classes.form}>
        <InputLabel id="demo-simple-select-label" className={classes.label}>
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

Filter.propTypes = {
  label: PropTypes.string,
};

Filter.defaultProps = {
  label: undefined,
};

export default Filter;
