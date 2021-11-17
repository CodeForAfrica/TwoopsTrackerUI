import { Grid, Typography, Button } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";

const Account = ({
  account: {
    name,
    screen_name: screenName,
    created_at: createdAt,
    protected: accountType,
  },
  ...props
}) => {
  const classes = useStyles(props);

  const date = new Date(createdAt);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={1}>
          <div className={classes.icon}>
            <Image layout="fill" src={UserIcon} />
          </div>
        </Grid>
        <Grid item lg={5} sm={12} className={classes.detailSection}>
          <Typography className={classes.username}>
            {name || "Username Username"}
          </Typography>
          {screenName && (
            <Typography
              className={classes.handle}
            >{`@${screenName}`}</Typography>
          )}
          {accountType && (
            <Typography className={classes.accountType}>
              {accountType ? "Private" : "Public"}
            </Typography>
          )}
          {createdAt && (
            <Typography className={classes.list}>
              {`Saved on ${date.toISOString().substr(0, 10)}`}
            </Typography>
          )}
        </Grid>
        <Grid item lg={5} sm={12} className={classes.buttonSection}>
          <Button className={classes.delete}>Delete</Button>
        </Grid>
      </Grid>
    </div>
  );
};

Account.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string,
    screen_name: PropTypes.string,
    created_at: PropTypes.string,
    protected: PropTypes.bool,
  }),
};

Account.defaultProps = {
  account: undefined,
};

export default Account;
