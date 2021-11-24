import { Typography, Divider, Grid, Button } from "@material-ui/core";
import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";
import Section from "@/twoopstracker/components/Section";

function UserProfile() {
  const classes = useStyles();
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
            <Typography className={classes.username}>
              Trolltracker Username
            </Typography>
            <Typography>City, Country</Typography>
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

export default UserProfile;
