import { FormControl, Typography, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import SortDown from "@/twoopstracker/assets/icons/sort-down.svg";
import SortUp from "@/twoopstracker/assets/icons/sort-up.svg";
import Image from "@/twoopstracker/components/Image";
import TweetSelect from "@/twoopstracker/components/TweetSelect";

function Sort({
  onChangeSortField,
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
    onChangeSortField({
      name: name || label.toLowerCase(),
      value: event.target.value,
    });
  };

  if (!menuItems?.length) {
    return null;
  }
  return (
    <FormControl fullWidth className={classes.form}>
      <Typography
        align="left"
        component="span"
        variant="body2"
        className={classes.label}
      >
        {label}
      </Typography>
      <TweetSelect
        name={name}
        label={label}
        value={value}
        handleChange={handleChange}
        menuItems={menuItems}
      />
      <IconButton
        color="default"
        variant="text"
        size="large"
        onClick={onClickSortOrder}
        className={classes.sortButton}
      >
        <Image
          layout="fill"
          src={isDesc ? SortDown : SortUp}
          className={classes.sortIcon}
        />
      </IconButton>
    </FormControl>
  );
}

Sort.propTypes = {
  onClickSortOrder: PropTypes.func,
  isDesc: PropTypes.bool,
  onChangeSortField: PropTypes.func,
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
  onChangeSortField: undefined,
  label: undefined,
  name: undefined,
  menuItems: undefined,
  value: undefined,
  isDesc: undefined,
};

export default Sort;
