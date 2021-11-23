import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Grid,
  Button,
} from "@material-ui/core";
import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";
import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

function UserProfile() {
  const classes = useStyles();
  return (
    <Section>
      <Grid container>
        <Grid item lg={3}>
          <List>
            <Link href="/accounts/lists" className={classes.link}>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  <Typography>Lists</Typography>
                </ListItemText>
              </ListItem>
            </Link>

            <Link href="/accounts/search" className={classes.link}>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  <Typography>Saved Searches</Typography>
                </ListItemText>
              </ListItem>
            </Link>

            <Link href="/accounts/upload" className={classes.link}>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  <Typography>Upload data</Typography>
                </ListItemText>
              </ListItem>
            </Link>

            <Link href="/accounts" className={classes.link}>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  <Typography>Your account</Typography>
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Grid>
        <Grid item lg={9}>
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
            <div className={classes.buttons}>
              <Button className={classes.button}>Edit</Button>
              <Button className={classes.button}>Delete</Button>
            </div>
            <Divider />
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}

export default UserProfile;
