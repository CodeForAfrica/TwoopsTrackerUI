import {
  Typography,
  Divider,
  Grid,
  Button,
  Avatar,
  Link,
} from "@material-ui/core";
import { useSession } from "next-auth/react";
import React from "react";

import useStyles from "./useStyles";

function UserAccount({ ...props }) {
  const classes = useStyles(props);
  const { data: session } = useSession();

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
          <Typography variant="h4" className={classes.username}>
            {name}
          </Typography>
          <Typography>{email}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <div className={classes.buttons}>
        <Button
          component={Link}
          href="/account/update"
          underline="none"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Edit
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Delete
        </Button>
      </div>
    </div>
  );
}

UserAccount.propTypes = {};

UserAccount.defaultProps = {};

export default UserAccount;
