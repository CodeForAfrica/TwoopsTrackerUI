import { Typography, Divider, Grid, Button, Link } from "@material-ui/core";
import { useSession } from "next-auth/react";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/avator.svg";
import Figure from "@/twoopstracker/components/Figure";

function UserAccount({ ...props }) {
  const classes = useStyles(props);
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  const {
    user: { email, name, image, firstName, lastName },
  } = session;

  return (
    <div className={classes.card}>
      <Grid container>
        <Grid item>
          <Figure
            src={image || UserIcon}
            width={106}
            height={106}
            className={classes.icon}
          />
        </Grid>
        <Grid item lg={10} className={classes.userDetails}>
          <Typography variant="h4" className={classes.username}>
            {firstName && lastName ? `${firstName} ${lastName}` : name}
          </Typography>
          <Typography>{email}</Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
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
