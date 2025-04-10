import { Box, LinearProgress, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    minWidth: typography.pxToRem(200),
    marginBottom: typography.pxToRem(20),
  },
}));

function Progress({ value, ...props }) {
  const classes = useStyles(props);
  return (
    <Box className={classes.root} display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          value={value}
          color="primary"
          variant="determinate"
          {...props}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

Progress.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Progress;
