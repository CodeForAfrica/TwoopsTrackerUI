import { InputBase } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const Search = ({ handleSelection, ...props }) => {
  const classes = useStyles(props);

  const handleChange = (event) => {
    handleSelection({ name: "query", value: event.target.value });
  };

  return (
    <InputBase
      placeholder="Search"
      onChange={handleChange}
      classes={{
        root: classes.root,
        input: classes.input,
      }}
    />
  );
};

Search.propTypes = {
  handleSelection: PropTypes.func,
};

Search.defaultProps = {
  handleSelection: undefined,
};

export default Search;
