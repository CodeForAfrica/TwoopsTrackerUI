import { Typography, Button, Grid } from "@material-ui/core";
import { useSession } from "next-auth/client";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import useStyles from "./useStyles";

import Link from "@/twoopstracker/components/Link";
import ListModal from "@/twoopstracker/components/ListModal";
import { updateList, deleteList } from "@/twoopstracker/lib";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function ListCard({
  name: listName,
  created_at: createdAt,
  accounts: listAccounts,
  is_private: privacyStatus,
  id,
  setLists,
  ...props
}) {
  const [session] = useSession();

  const [open, setOpen] = useState(false);
  const [deleteopen, setDeleteOpen] = useState(false);

  const [name, setName] = useState(listName);
  const [privacy, setPrivacy] = useState(privacyStatus);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  const fetcher = (url, token) => fetchJson(url, token);
  const { data, mutate } = useSWR([`/api/lists`, session], fetcher);

  useEffect(() => {
    if (data) {
      setLists(data.results);
    }
  }, [data, setLists]);

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    }

    if (event.target.name === "privacy") {
      setPrivacy(event.target.checked);
    }
  };

  const onUpdate = async () => {
    const payload = {
      name,
      is_private: privacy,
      accounts: [{ screen_name: "code4africa" }], // to be deleted
    };

    try {
      await updateList("/api/lists", payload, id, session);

      mutate({ ...data });
      setOpen(false);
    } catch (e) {
      setOpen(true);
    }
  };

  const onDelete = async () => {
    try {
      await deleteList("/api/lists", id, session);
      mutate({ ...data });
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
      <Link href={`/account/lists/${id}`}>
        <Typography className={classes.title}>{listName}</Typography>
      </Link>
      <Grid container>
        <Grid item xs={12} md={8}>
          {createdAt && (
            <Typography>{`Saved on ${year} at ${hours}`}</Typography>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Button onClick={handleOpen} className={classes.editButton}>
            Edit
          </Button>
          <Button onClick={handleDeleteOpen} className={classes.deleteButton}>
            Delete
          </Button>
          <ListModal
            open={open}
            onClose={handleClose}
            nameLabel="ListName"
            nameValue={name}
            nameHelper="Name of List"
            nameOnChange={handleChange}
            // accountsLabel="User Accounts"
            // accountsOnChange={handleChange}
            // accountsHelper="Enter twitter account names seperated by a comma i.e userone,usertwo"
            // accountsValue={accountsStr}
            privacyValue={privacyStatus}
            privacyOnChange={handleChange}
            buttonLabel="Update"
            buttonOnClick={onUpdate}
          />
          <ListModal
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

ListCard.propTypes = {
  name: PropTypes.string,
  accounts: PropTypes.arrayOf(PropTypes.shape({})),
  id: PropTypes.number,
  is_private: PropTypes.bool,
  created_at: PropTypes.string,
  setLists: PropTypes.func,
};

ListCard.defaultProps = {
  name: undefined,
  accounts: undefined,
  id: undefined,
  is_private: undefined,
  created_at: undefined,
  setLists: undefined,
};

export default ListCard;
