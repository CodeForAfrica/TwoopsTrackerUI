import { Grid, Typography, Button, Avatar } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import Link from "@/twoopstracker/components/Link";
import ListModal from "@/twoopstracker/components/ListModal";

const Account = ({
  account: {
    name,
    screen_name: screenName,
    created_at: createdAt,
    protected: accountType,
    profile_image_url: image,
  },
  items,
  onDelete,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles(props);

  const date = new Date(createdAt);

  const onAccountDelete = async () => {
    try {
      await onDelete(screenName);
      setOpen(true);
    } catch (e) {
      setOpen(false);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={1}>
          <div className={classes.icon}>
            <Avatar src={image} className={classes.avatar} />
          </div>
        </Grid>
        <Grid item lg={5} sm={12} className={classes.detailSection}>
          <Typography className={classes.username} variant="h4">
            {name || "Username Username"}
          </Typography>
          {screenName && (
            <Link href={`https://twitter.com/${screenName}`}>
              <Typography
                className={classes.handle}
              >{`@${screenName}`}</Typography>
            </Link>
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
          {onDelete && (
            <Button
              onClick={handleOpen}
              disabled={items === 1}
              className={classes.delete}
            >
              Delete
            </Button>
          )}
          <ListModal
            open={open}
            onClose={handleClose}
            buttonLabel="Delete"
            buttonOnClick={onAccountDelete}
            deleteDescription="Are you sure you want to delete this account from this List?"
          />
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
    profile_image_url: PropTypes.string,
    protected: PropTypes.bool,
  }),
  items: PropTypes.number,
  onDelete: PropTypes.func,
};

Account.defaultProps = {
  account: undefined,
  items: undefined,
  onDelete: undefined,
};

export default Account;
