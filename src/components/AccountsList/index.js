import { Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import useStyles from "./useStyles";

import Account from "@/twoopstracker/components/Account";
import ListModal from "@/twoopstracker/components/ListModal";
import Pagination from "@/twoopstracker/components/Pagination";
import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

const AccountsList = ({
  apiUrl,
  editable,
  paginationProps,
  data: {
    page: pageProp,
    pageSize: pageSizeProp,
    name,
    count,
    accounts,
    is_private: isPrivate,
  },
  ...props
}) => {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [listAccounts, setListAccounts] = useState(accounts);
  const [newAccounts, setNewAccounts] = useState("");
  const [page, setPage] = useState(pageProp);
  const [pageSize, setPageSize] = useState(pageSizeProp);
  const fetcher = (url) => fetchJson(url);
  const paginationString = new URLSearchParams({ page, pageSize }).toString();
  const { data, mutate } = useSWR(apiUrl + paginationString, fetcher);

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

  const handleClickPage = (e, value) => {
    setPage(value);
  };
  const handleClickPageSize = (e, value) => {
    // Changing pageSize triggers computation of number of pages.
    setPage(1);
    setPageSize(value);
  };

  return (
    <Section className={classes.root}>
      <div className={classes.section}>
        {name && <Typography variant="h2">{name}</Typography>}
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
      <Pagination
        {...paginationProps}
        count={Math.ceil(count / (pageSize || 20))}
        onChangePage={handleClickPage}
        onChangePageSize={handleClickPageSize}
        page={page}
        pageSize={pageSize}
      />
    </Section>
  );
};

AccountsList.propTypes = {
  apiUrl: PropTypes.string,
  data: PropTypes.shape({
    accounts: PropTypes.arrayOf(PropTypes.shape({})),
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
