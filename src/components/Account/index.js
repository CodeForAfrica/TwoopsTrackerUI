import { Grid, Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/avator.svg";
import Figure from "@/twoopstracker/components/Figure";
import Link from "@/twoopstracker/components/Link";
import ListModal from "@/twoopstracker/components/ListModal";

function Account({
  account: {
    account_id: id,
    name,
    screen_name: screenName,
    created_at: createdAt,
    protected: accountType,
    profile_image_url: profileImageHttpNormal,
    profile_image_url_https: profileImageHttpsNormal,
  },
  deleteLabel,
  items,
  onDelete,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles(props);

  const date = new Date(createdAt);
  const profileImageNormal = profileImageHttpsNormal || profileImageHttpNormal;
  const profileImage = profileImageNormal?.replace("_normal", "");

  const onAccountDelete = async () => {
    try {
      await onDelete(id);
      setOpen(true);
    } catch (e) {
      setOpen(false);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={2}>
          <Grid item>
            <Figure src={profileImage || UserIcon} className={classes.icon} />
          </Grid>
        </Grid>
        <Grid item md={5} xs={12} className={classes.detailSection}>
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
        <Grid item md={5} xs={12} className={classes.buttonSection}>
          {onDelete && (
            <Button
              onClick={handleOpen}
              disabled={items === 1}
              className={classes.delete}
              variant="contained"
              color="primary"
            >
              {deleteLabel}
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
}

Account.propTypes = {
  account: PropTypes.shape({
    account_id: PropTypes.number,
    name: PropTypes.string,
    screen_name: PropTypes.string,
    created_at: PropTypes.string,
    profile_image_url: PropTypes.string,
    profile_image_url_https: PropTypes.string,
    protected: PropTypes.bool,
  }),
  items: PropTypes.number,
  onDelete: PropTypes.func,
  deleteLabel: PropTypes.string,
};

Account.defaultProps = {
  account: undefined,
  items: undefined,
  deleteLabel: undefined,
  onDelete: undefined,
};

export default Account;
