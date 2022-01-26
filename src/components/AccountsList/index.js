import { Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import useStyles from "./useStyles";

import Account from "@/twoopstracker/components/Account";
import ContentActions from "@/twoopstracker/components/ContentActions";
import ListModal from "@/twoopstracker/components/ListModal";
import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function AccountsList({
  apiUrl,
  editable,
  paginationProps,
  data: { id, name, results: accounts, is_private: isPrivate },
  ...props
}) {
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
      setListAccounts(data.results); // only fetches name
    }
  }, [data]);

  const handleDelete = async (account) => {
    const filteredAccounts = listAccounts.filter(
      (acc) => acc.screen_name !== account
    );

    const payload = {
      name: "Test List", // to be removed
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
      <div className={classes.titleSection}>
        {name && <Typography variant="h2">{name}</Typography>}
        {editable && (
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Account
          </Button>
        )}
      </div>
      <ContentActions
        apiUri={`/api/lists/${id}`}
        classes={{ section: classes.actions }}
        type="lists"
      />
      <ListModal
        open={open}
        onClose={handleClose}
        accountsLabel="User Accounts"
        accountsOnChange={handleChange}
        accountsHelper="Enter twitter account names seperated by a comma i.e userone,usertwo"
        buttonLabel="Add"
        buttonOnClick={handleCreate}
      />
      {listAccounts?.map((account) => {
        return (
          <Account
            key={account.screen_name}
            account={account}
            items={listAccounts.length}
            onDelete={editable ? handleDelete : null}
          />
        );
      })}
    </Section>
  );
}

AccountsList.propTypes = {
  apiUrl: PropTypes.string,
  data: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({})),
    count: PropTypes.number,
    id: PropTypes.number,
    is_private: PropTypes.bool,
    name: PropTypes.string,
    page: PropTypes.number,
    pageSize: PropTypes.number,
  }),
  editable: PropTypes.bool,
  paginationProps: PropTypes.shape({}),
};

AccountsList.defaultProps = {
  data: undefined,
  apiUrl: undefined,
  editable: false,
  paginationProps: undefined,
};

export default AccountsList;
