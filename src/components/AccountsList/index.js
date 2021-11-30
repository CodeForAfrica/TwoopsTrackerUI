import { Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import useStyles from "./useStyles";

import Account from "@/twoopstracker/components/Account";
import ListModal from "@/twoopstracker/components/ListModal";
import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

const AccountList = ({
  data: { name, accounts, is_private: privacy, id },
  ...props
}) => {
  const classes = useStyles(props);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [listAccounts, setListAccounts] = useState(accounts);
  const [newAccounts, setNewAccounts] = useState("");

  const fetcher = (url) => fetchJson(url);
  const { data, mutate } = useSWR(`/api/lists/${id}`, fetcher);

  useEffect(() => {
    if (data) {
      setListAccounts(data.accounts);
    }
  }, [data]);

  const onDelete = async (account) => {
    const filteredAccounts = listAccounts.filter(
      (acc) => acc.screen_name !== account
    );

    const payload = {
      name,
      accounts: filteredAccounts,
      is_private: privacy,
    };

    await fetchJson(`/api/lists/${id}`, null, {
      method: "PUT",
      body: JSON.stringify(payload),
    });

    mutate({ ...data });
  };

  const handleChange = (event) => {
    if (event.target.name === "accounts") {
      setNewAccounts(event.target.value);
    }
  };

  const onCreate = async () => {
    const accountsMap = newAccounts
      .split(",")
      .map((item) => ({ screen_name: item }));

    const payload = {
      name,
      is_private: privacy,
      accounts: [...accountsMap, ...accounts],
    };

    try {
      await fetchJson(`/api/lists/${id}`, null, {
        method: "PUT",
        body: JSON.stringify(payload),
      });

      mutate({ ...data });
      setOpen(false);
      setNewAccounts("");
    } catch (e) {
      setOpen(true);
    }
  };

  return (
    <Section className={classes.root}>
      <div className={classes.section}>
        {name && <Typography className={classes.listName}>{name}</Typography>}
        <Button onClick={handleOpen} className={classes.button}>
          Add Account
        </Button>
      </div>
      <ListModal
        open={open}
        onClose={handleClose}
        accountsLabel="User Accounts"
        accountsOnChange={handleChange}
        accountsHelper="Enter twitter account names seperated by a comma i.e userone,usertwo"
        buttonLabel="Add"
        buttonOnClick={onCreate}
      />
      {listAccounts?.map((account) => (
        <Account
          key={account.screen_name}
          account={account}
          items={listAccounts.length}
          onDelete={onDelete}
        />
      ))}
    </Section>
  );
};

AccountList.propTypes = {
  data: PropTypes.shape({
    accounts: PropTypes.arrayOf(PropTypes.shape({})),
    name: PropTypes.string,
    is_private: PropTypes.bool,
    id: PropTypes.number,
  }),
};

AccountList.defaultProps = {
  data: undefined,
};

export default AccountList;
