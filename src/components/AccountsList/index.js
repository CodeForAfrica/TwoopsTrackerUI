import React from "react";

import useStyles from "./useStyles";

const Account = (props) => {
  const classes = useStyles(props);
  return <div className={classes.root}>Accounts List</div>;
};

export default Account;
