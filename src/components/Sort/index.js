import { FormControl, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import SortDown from "@/twoopstracker/assets/icons/sort-down.svg";
import SortUp from "@/twoopstracker/assets/icons/sort-up.svg";
import TweetSelect from "@/twoopstracker/components/TweetSelect";

function Sort({
  handleSelection,
  onClickSortOrder,
  isDesc,
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
      <TweetSelect
        name={name}
        label={label}
        value={value}
        handleChange={handleChange}
        menuItems={menuItems}
      />
      <Button
        color="default"
        variant="text"
        size="large"
        onClick={onClickSortOrder}
        classes={{
          root: classes.buttonIcon,
        }}
        startIcon={
          <Image
            layout="fill"
            src={isDesc ? SortDown : SortUp}
            className={classes.large}
          />
        }
      />
    </FormControl>
  );
}

Sort.propTypes = {
  onClickSortOrder: PropTypes.func,
  isDesc: PropTypes.bool,
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
  onClickSortOrder: undefined,
  handleSelection: undefined,
  label: undefined,
  name: undefined,
  menuItems: undefined,
  value: undefined,
  isDesc: undefined,
};

export default Sort;
