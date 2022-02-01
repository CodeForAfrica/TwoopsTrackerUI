import { Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import useStyles from "./useStyles";

import Account from "@/twoopstracker/components/Account";
import ContentActions from "@/twoopstracker/components/ContentActions";
import ListModal from "@/twoopstracker/components/ListModal";
import Pagination from "@/twoopstracker/components/Pagination";
import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";
import getQueryString from "@/twoopstracker/utils/getQueryString";

function AccountsList({
  apiUrl,
  editable,
  paginationProps,
  data: { id, name, count, results: accounts, is_private: isPrivate },
  ...props
}) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [listAccounts, setListAccounts] = useState(accounts);
  const [newAccounts, setNewAccounts] = useState("");
  const [existingAccounts, setExistingAccounts] = useState(accounts);
  const [page, setPage] = useState();
  const [pageSize, setPageSize] = useState(3);
  const fetcher = (url, pg, pSize) => {
    const queryString = getQueryString({
      page: pg,
      pageSize: pSize,
    });
    let listURL = url;
    if (queryString) {
      listURL = `${listURL}&&${queryString}`;
    }
    return fetchJson(listURL);
  };

  const { data, mutate } = useSWR(
    [`${apiUrl}/?accounts=true`, page, pageSize],
    fetcher
  );

  const { data: accountsData, mutate: mutateAccountsData } = useSWR(
    `${apiUrl}/?accounts=true`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setListAccounts(data.results);
    }

    if (accountsData) {
      setExistingAccounts(accountsData.results);
    }
  }, [data, accountsData]);

  const handleClickPage = (e, value) => {
    setPage(value);
  };
  const handleClickPageSize = (e, value) => {
    // Changing pageSize triggers computation of number of pages.
    setPage(1);
    setPageSize(value);
  };

  const handleDelete = async (account) => {
    fetchJson(`${apiUrl}/?del=${account}`, null, {
      method: "DELETE",
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
      accounts: [...accountsMap, ...existingAccounts],
    };

    try {
      await fetchJson(apiUrl, null, {
        method: "PUT",
        body: JSON.stringify(payload),
      });

      mutate({ ...data });
      mutateAccountsData();
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
      <Pagination
        {...paginationProps}
        count={Math.ceil((count ?? 0) / (pageSize || 10))}
        onChangePage={handleClickPage}
        onChangePageSize={handleClickPageSize}
        page={page}
        pageSize={pageSize}
      />
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
