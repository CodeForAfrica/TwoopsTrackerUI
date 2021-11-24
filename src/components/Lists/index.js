import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";

import useStyles from "./useStyles";

import ListCard from "@/twoopstracker/components/ListCard";
import ListModal from "@/twoopstracker/components/ListModal";
import { createList } from "@/twoopstracker/lib";

function Lists({ results: listsProp, ...props }) {
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState(listsProp);
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles(props);

  const { mutate } = useSWRConfig();

  const fetcher = (url) => fetch(url).then((results) => results.json());
  const { data } = useSWR(`/api/lists`, fetcher);

  useEffect(() => {
    if (data) {
      setLists(data.results);
    }
  }, [data]);

  const onCreate = async () => {
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
      await createList(payload, "/api/lists");
      mutate("/api/lists", { ...data });
      setOpen(false);
      setName("");
      setAccounts("");
      setPrivacy(false);
    } catch (e) {
      setOpen(true);
    }
  };

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

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography className={classes.listTitle}>Your Lists</Typography>
        <Button onClick={handleOpen} className={classes.button}>
          Create New List
        </Button>
        <ListModal
          open={open}
          onClose={handleClose}
          nameValue={name}
          nameLabel="ListName"
          nameHelper="Name of List"
          nameOnChange={handleChange}
          accountsLabel="User Accounts"
          accountsOnChange={handleChange}
          accountsHelper="Enter twitter account names seperated by a comma i.e userone,usertwo"
          privacyOnChange={handleChange}
          accountsValue={accounts}
          privacyValue={privacy}
          buttonLabel="Create"
          buttonOnClick={onCreate}
        />
      </div>
      {lists?.length ? (
        <>
          {lists?.map((item) => (
            <ListCard
              key={item.name}
              classes={{ root: classes.listItem }}
              {...item}
              setLists={setLists}
            />
          ))}
        </>
      ) : (
        <Typography variant="body1">There are no lists</Typography>
      )}
    </div>
  );
}

Lists.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
};

Lists.defaultProps = {
  results: undefined,
};

export default Lists;
