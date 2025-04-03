import { Box, CircularProgress } from "@mui/material";
import React from "react";

import useStyles from "./useStyles";

function Loading() {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }} className={classes.box}>
      <CircularProgress className={classes.progress} />
    </Box>
  );
}

export default Loading;
