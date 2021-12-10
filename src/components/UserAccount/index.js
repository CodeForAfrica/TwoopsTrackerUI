import { Typography, Divider, Grid, Button } from "@material-ui/core";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";

function UserAccount({ ...props }) {
  const classes = useStyles(props);
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  const {
    user: { email, name },
  } = session;

  return (
    <div className={classes.card}>
      <Grid container>
        <Grid item lg={1}>
          <div className={classes.icon}>
            <Image layout="fill" src={UserIcon} />
          </div>
        </Grid>
        <Grid item lg={10} className={classes.userDetails}>
          <Typography className={classes.username}>{name}</Typography>
          <Typography>{email}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <div className={classes.buttons}>
        <Button className={classes.button}>Edit</Button>
        <Button className={classes.button}>Delete</Button>
      </div>
    </div>
  );
}

UserAccount.propTypes = {};

UserAccount.defaultProps = {};

export default UserAccount;
