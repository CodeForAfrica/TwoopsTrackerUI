import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const Sort = ({ handleSelection, label, menuItems, value, ...props }) => {
  const classes = useStyles(props);

  const handleChange = (event) => {
    handleSelection({ name: label.toLowerCase(), value: event.target.value });
  };

  return (
    <Box className={classes.box}>
      <InputLabel id={`${label}-id`} shrink className={classes.inputLabel}>
        <Typography variant="body1" className={classes.label}>
          {label}
        </Typography>
      </InputLabel>

      <FormControl fullWidth className={classes.form}>
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

Sort.propTypes = {
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

Sort.defaultProps = {
  handleSelection: undefined,
  label: undefined,
  menuItems: undefined,
  value: undefined,
};

export default Sort;
