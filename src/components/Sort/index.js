import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  InputBase,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function Sort({ handleSelection, label, name, menuItems, value, ...props }) {
  const classes = useStyles(props);

  const handleChange = (event) => {
    handleSelection({
      name: name || label.toLowerCase(),
      value: event.target.value,
    });
  };

  return (
    <Box className={classes.box}>
      <InputLabel id={`${label}-id`} shrink className={classes.inputLabel}>
        <Typography variant="h1" className={classes.label}>
          {label}
        </Typography>
      </InputLabel>

      <FormControl fullWidth className={classes.form}>
        <Select
          labelId={`${label}-id`}
          value={value}
          onChange={handleChange}
          className={classes.select}
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
      </FormControl>
    </Box>
  );
}

Sort.propTypes = {
  handleSelection: PropTypes.func,
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
  label: undefined,
  name: undefined,
  menuItems: undefined,
  value: undefined,
};

export default Sort;
