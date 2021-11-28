import { Button, Typography } from "@material-ui/core";
import { useSession } from "next-auth/client";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";

import useStyles from "./useStyles";

import ListCard from "@/twoopstracker/components/ListCard";
import ListModal from "@/twoopstracker/components/ListModal";
import { createList } from "@/twoopstracker/lib";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function Lists({ results: listsProp, ...props }) {
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState(listsProp ? listsProp.results : []);
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles(props);

  const [session, loading] = useSession();

  useEffect(() => {
    if (!session && !loading) {
      Router.push("/login");
    }
  }, [session, loading]);

  const { mutate } = useSWRConfig();

  const fetcher = (url, token) => fetchJson(url, token);
  const { data } = useSWR([`/api/lists`, session], fetcher);

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
      is_private: privacy,
      accounts: accountsMap,
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

  // if (!listsProp.results.length) {
  //   return null;
  // }

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
