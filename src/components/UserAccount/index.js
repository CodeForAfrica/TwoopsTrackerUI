import { Typography, Divider, Grid, Button } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";
import Section from "@/twoopstracker/components/Section";

function UserAccount({ name, email, ...props }) {
  const classes = useStyles(props);
  return (
    <Section>
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
    </Section>
  );
}
UserAccount.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

UserAccount.defaultProps = {
  name: undefined,
  email: undefined,
};

export default UserAccount;
