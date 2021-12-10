import { Typography, Divider, Grid, Button, Avatar } from "@material-ui/core";
import { useSession } from "next-auth/client";
import React from "react";

import useStyles from "./useStyles";

function UserAccount({ ...props }) {
  const classes = useStyles(props);
  const [session] = useSession();

  if (!session) {
    return null;
  }

  const {
    user: { email, name, image },
  } = session;

  return (
    <div className={classes.card}>
      <Grid container>
        <Grid item>
          <div className={classes.icon}>
            <Avatar alt={name} src={image} className={classes.avatar} />
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
