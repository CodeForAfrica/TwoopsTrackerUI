import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";

const TweetCard = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Grid>
        <div className={classes.icon}>
          <Image layout="fill" src={UserIcon} />
        </div>
      </Grid>
      <Typography className={classes.text}>
        Retweet @handle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam
        lorem nu...
      </Typography>
      <Typography className={classes.text}>
        Original tweet by Link to original tweet
      </Typography>
    </div>
  );
};

export default TweetCard;
