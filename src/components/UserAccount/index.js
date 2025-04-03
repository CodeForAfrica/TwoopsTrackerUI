import { Typography, Divider, Grid, Button } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/avator.svg";
import Figure from "@/twoopstracker/components/Figure";
import Link from "@/twoopstracker/components/Link";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function UserAccount({ ...props }) {
  const classes = useStyles(props);
  const { data: session } = useSession();

  const handleClickDelete = async () => {
    await fetchJson("/api/user", undefined, { method: "DELETE" });
    signOut();
  };

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
      <Divider
        className={classes.divider}
        sx={{
          opacity: "0.6",
        }}
      />
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickDelete}
          className={classes.button}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

UserAccount.propTypes = {};

UserAccount.defaultProps = {};

export default UserAccount;
