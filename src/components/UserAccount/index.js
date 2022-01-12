import {
  Typography,
  Divider,
  Grid,
  Button,
  Avatar,
  Link,
} from "@material-ui/core";
import { useSession, getSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

import useStyles from "./useStyles";

function UserAccount({ ...props }) {
  const classes = useStyles(props);
  // useSession does not work get the session from the server, but from the storage, so we can quickly test if the user is logged in.
  const { data } = useSession();
  const [session, setSession] = useState(data);

  // getSession gets the updated session from the backend in case of change in profile.
  useEffect(() => {
    async function fetchSession() {
      const newSession = await getSession();
      setSession(newSession);
    }
    fetchSession();
  }, []);
  if (!session) {
    return null;
  }

  const {
    user: { email, name, image, first_name: firstName, last_name: lastName },
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
            {firstName && lastName ? `${firstName} ${lastName}` : name}
          </Typography>
          <Typography>{email}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <div className={classes.buttons}>
        <Button
          component={Link}
          href="/account/settings/update"
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
