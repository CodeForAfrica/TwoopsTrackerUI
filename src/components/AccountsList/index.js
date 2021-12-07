import { Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import useStyles from "./useStyles";

import Account from "@/twoopstracker/components/Account";
import ListModal from "@/twoopstracker/components/ListModal";
import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

const AccountsList = ({
  apiUrl,
  editable,
  data: { name, accounts, is_private: isPrivate },
  ...props
}) => {
  const classes = useStyles(props);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [listAccounts, setListAccounts] = useState(accounts);
  const [newAccounts, setNewAccounts] = useState("");
  const fetcher = (url) => fetchJson(url);
  const { data, mutate } = useSWR(apiUrl, fetcher);

  useEffect(() => {
    if (data) {
      setListAccounts(data.accounts);
    }
  }, [data]);

  const handleDelete = async (account) => {
    const filteredAccounts = listAccounts.filter(
      (acc) => acc.screen_name !== account
    );

    const payload = {
      name,
      accounts: filteredAccounts,
      owner: 1,
      is_private: isPrivate,
    };

    await fetchJson(apiUrl, null, {
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

  const handleCreate = async () => {
    const accountsMap = newAccounts
      .split(",")
      .map((item) => ({ screen_name: item }));

    const payload = {
      name,
      is_private: isPrivate,
      accounts: [...accountsMap, ...accounts],
    };

    try {
      await fetchJson(apiUrl, null, {
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
        {editable && (
          <Button onClick={handleOpen} className={classes.button}>
            Add Account
          </Button>
        )}
      </div>
      <ListModal
        open={open}
        onClose={handleClose}
        accountsLabel="User Accounts"
        accountsOnChange={handleChange}
        accountsHelper="Enter twitter account names seperated by a comma i.e userone,usertwo"
        buttonLabel="Add"
        buttonOnClick={handleCreate}
      />
      {listAccounts?.map((account) => (
        <Account
          key={account.screen_name}
          account={account}
          items={listAccounts.length}
          onDelete={editable ? handleDelete : null}
        />
      ))}
    </Section>
  );
};

AccountsList.propTypes = {
  apiUrl: PropTypes.string,
  editable: PropTypes.bool,
  data: PropTypes.shape({
    accounts: PropTypes.arrayOf(PropTypes.shape({})),
    id: PropTypes.number,
    is_private: PropTypes.bool,
    name: PropTypes.string,
  }),
};

AccountsList.defaultProps = {
  data: undefined,
  apiUrl: undefined,
  editable: false,
};

export default AccountsList;
