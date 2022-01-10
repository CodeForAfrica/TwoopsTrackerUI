import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Sort from "@/twoopstracker/components/Sort";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    paddingBottom: typography.pxToRem(20),
  },
  orderLabel: {
    marginRight: typography.pxToRem(40),
  },
  label: {},
  buttonGroup: {},
  buttonGroupGroupedTextHorizontal: {
    "&:not(:last-child)": {
      border: "none",
    },
  },
  button: {
    "&::after": {
      display: "none",
    },
    color: palette.grey.main,
    height: "max-content",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
    },
  },
  selectedOption: {
    "&.Mui-disabled": {
      color: `${palette.grey.dark}`,
    },
  },
}));

const TweetSort = ({
  onSort,
  orderLabel,
  orderOptions,
  sortOrder,
  ...props
}) => {
  const classes = useStyles(props);

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify="space-betweeen"
    >
      <Grid
        item
        md={6}
        lg={4}
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Typography className={classes.orderLabel} variant="body2">
          {orderLabel}
        </Typography>
        <Sort onChange={onSort} options={orderOptions} selected={sortOrder} />
      </Grid>
    </Grid>
  );
};

TweetSort.propTypes = {
  onSort: PropTypes.func,
  orderLabel: PropTypes.string,
  orderOptions: PropTypes.arrayOf(PropTypes.shape({})),
  sortOrder: PropTypes.string,
};

TweetSort.defaultProps = {
  onSort: undefined,
  orderLabel: undefined,
  orderOptions: undefined,
  sortOrder: undefined,
};

export default TweetSort;
