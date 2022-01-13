import { InputBase } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function Search({ name, onChange, placeholder, ...props }) {
  const classes = useStyles(props);

  const handleChange = (event) => {
    if (onChange) {
      onChange({ name, value: event.target.value });
    }
  };

  return (
    <InputBase
      {...props}
      placeholder={placeholder}
      onChange={handleChange}
      classes={{
        root: classes.root,
        input: classes.input,
      }}
    />
  );
}

Search.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  name: "query",
  onChange: undefined,
  placeholder: "Search",
};

export default Search;
