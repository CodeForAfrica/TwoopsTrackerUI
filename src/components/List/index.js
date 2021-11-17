import { Typography, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import CustomModal from "@/twoopstracker/components/Modal";

function List({
  name: listName,
  created_at: createdAt,
  accounts: listAccounts,
  is_private: privacyStatus,
  id,
  setLists,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [deleteopen, setDeleteOpen] = useState(false);

  const [name, setName] = useState(listName);
  const [privacy, setPrivacy] = useState(privacyStatus);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  let accountsStr = null;
  listAccounts.forEach((account) => {
    if (accountsStr === null) {
      accountsStr = `${account.screen_name}`;
    } else {
      accountsStr = `${account.screen_name},${accountsStr}`;
    }
  });

  const [accounts, setAccounts] = useState(accountsStr);

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    }

    if (event.target.name === "accounts") {
      setAccounts(event.target.value);
    }

    if (event.target.name === "privacy") {
      setPrivacy(event.target.checked);
    }
  };

  const onUpdate = async () => {
    const accountsMap = accounts
      .split(",")
      .map((item) => ({ screen_name: item }));

    const payload = {
      name,
      accounts: accountsMap,
      owner: 1,
      is_private: privacy,
    };

    try {
      await fetch(`/api/accounts/lists/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });

      const data = await fetch("/api/accounts/lists");
      const result = await data.json();

      setLists(result.results);
      setOpen(false);
    } catch (e) {
      setOpen(true);
    }
  };

  const onDelete = async () => {
    try {
      await fetch(`/api/accounts/lists/${id}`, {
        method: "DELETE",
      });

      const data = await fetch("/api/accounts/lists");
      const result = await data.json();

      setLists(result.results);
      setDeleteOpen(false);
    } catch (e) {
      setDeleteOpen(true);
    }
  };

  const classes = useStyles(props);

  const date = new Date(createdAt).toISOString();

  const year = date.substr(0, 10);
  const hours = date.substr(11, 8);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{listName}</Typography>
      <Grid container>
        <Grid item xs={10}>
          {createdAt && (
            <Typography>{`Saved on ${year} at ${hours}`}</Typography>
          )}
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handleOpen} className={classes.editButton}>
            Edit
          </Button>
          <Button onClick={handleDeleteOpen} className={classes.deleteButton}>
            Delete
          </Button>
          <CustomModal
            open={open}
            onClose={handleClose}
            nameLabel="ListName"
            nameValue={name}
            nameHelper="Name of List"
            nameOnChange={handleChange}
            accountsLabel="User Accounts"
            accountsOnChange={handleChange}
            accountsHelper="Enter twitter account names seperated by a comma i.e userone,usertwo"
            accountsValue={accountsStr}
            privacyValue={privacyStatus}
            privacyOnChange={handleChange}
            buttonLabel="Update"
            buttonOnClick={onUpdate}
          />
          <CustomModal
            open={deleteopen}
            onClose={handleDeleteClose}
            buttonLabel="Delete"
            buttonOnClick={onDelete}
            deleteDescription="Are you sure you want to delete this List?"
          />
        </Grid>
      </Grid>
    </div>
  );
}

List.propTypes = {
  name: PropTypes.string,
  accounts: PropTypes.arrayOf(PropTypes.shape({})),
  id: PropTypes.number,
  is_private: PropTypes.bool,
  created_at: PropTypes.string,
  setLists: PropTypes.func,
};

List.defaultProps = {
  name: undefined,
  accounts: undefined,
  id: undefined,
  is_private: undefined,
  created_at: undefined,
  setLists: undefined,
};

export default List;
