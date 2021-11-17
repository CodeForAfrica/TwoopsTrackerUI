import { Grid, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";

const Account = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={1}>
          <div className={classes.icon}>
            <Image layout="fill" src={UserIcon} />
          </div>
        </Grid>
        <Grid item lg={5} sm={12} className={classes.detailSection}>
          <Typography className={classes.username}>
            Username Username
          </Typography>
          <Typography className={classes.handle}>@handle</Typography>
          <Typography className={classes.accountType}>
            Type of account
          </Typography>
          <Typography className={classes.list}>
            Saved on mm/dd/yy at 00:00:00
          </Typography>
        </Grid>
        <Grid item lg={5} sm={12} className={classes.buttonSection}>
          <Button className={classes.edit}>Edit</Button>
          <Button className={classes.delete}>Delete</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;
