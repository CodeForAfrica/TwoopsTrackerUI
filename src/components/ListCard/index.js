import { Typography, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import useStyles from "./useStyles";

import Link from "@/twoopstracker/components/Link";
import ListModal from "@/twoopstracker/components/ListModal";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function ListCard({
  name: listName,
  created_at: createdAt,
  accounts: listAccounts,
  is_private: isPrivate,
  id,
  setLists,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [deleteopen, setDeleteOpen] = useState(false);

  const [name, setName] = useState(listName);
  const [privacy, setPrivacy] = useState(isPrivate);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  const fetcher = (url) => fetchJson(url);
  const { data, mutate } = useSWR(`/api/lists`, fetcher);

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

  const handleUpdate = async () => {
    const payload = {
      name,
      is_private: privacy,
    };

    try {
      await fetchJson(`/api/lists/${id}`, null, {
        method: "PATCH",
        body: JSON.stringify(payload),
      });

      mutate({ ...data });
      setOpen(false);
    } catch (e) {
      setOpen(true);
    }
  };

  const handleDelete = async () => {
    try {
      await fetchJson(`/api/lists/${id}`, null, {
        method: "DELETE",
      });

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
      <Typography className={classes.title}>
        <Link href={`/account/lists/${id}`}>{listName}</Link>
      </Typography>
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
            privacyValue={isPrivate}
            privacyOnChange={handleChange}
            buttonLabel="Update"
            buttonOnClick={handleUpdate}
          />
          <ListModal
            open={deleteopen}
            onClose={handleDeleteClose}
            buttonLabel="Delete"
            buttonOnClick={handleDelete}
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
