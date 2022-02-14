import { Typography, Button } from "@material-ui/core";
import { useSession } from "next-auth/react";
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
  addAccountLabel,
  deleteLabel,
  paginationProps,
  data: { name, count, results: accounts, is_private: isPrivate },
  ...props
}) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [listAccounts, setListAccounts] = useState(accounts);
  const [newAccounts, setNewAccounts] = useState("");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [currentCount, setCurrentCount] = useState(count);
  const { data: session } = useSession();
  const fetcher = (url) => {
    return fetchJson(url, session);
  };

  const paginate = (newPage) => {
    if (newPage) {
      setPage(newPage);
    }
  };
  const handleChangeSortBy = ({ value }) => {
    setSort((prevSort) => {
      const sortOrder = prevSort.startsWith("-") ? "-" : "";
      return `${sortOrder}${value}`;
    });
    paginate(1);
  };
  const handleClickSortOrder = (e) => {
    e.preventDefault();

    setSort((prevSort) => {
      const sortOrder = prevSort.startsWith("-") ? "" : "-";
      const sortBy = prevSort.replace(/^-/, "");

      return `${sortOrder}${sortBy}`;
    });
    paginate(1);
  };
  const handleClickPage = (e, value) => {
    paginate(value);
  };
  const handleClickPageSize = (e, value) => {
    setPageSize(value);
    paginate(1);
  };

  const shouldFetch = () => {
    let url = apiUrl;
    const queryString = getQueryString({
      page,
      pageSize,
      sort,
      accounts: editable,
    });
    if (queryString) {
      url = `${url}?${queryString}`;
    }
    return url;
  };
  const { data, mutate } = useSWR(shouldFetch, fetcher);

  useEffect(() => {
    if (data) {
      setListAccounts(data.results);
      setCurrentCount(data.count);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [data]);
  const handleDelete = async (account) => {
    await fetchJson(`${apiUrl}/?del=${account}`, null, {
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
    const listData = await fetchJson(`${apiUrl}/?accounts=true`, null, {
      method: "GET",
    });

    const accountsMap = newAccounts
      .split(",")
      .map((item) => ({ screen_name: item }));

    const payload = {
      name,
      is_private: isPrivate,
      accounts: [...accountsMap, ...listData.results],
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
            {addAccountLabel}
          </Button>
        )}
      </div>
      <ContentActions
        apiUri={apiUrl}
        sort={sort}
        menuItems={[
          { name: "Created At", value: "created-at" },
          { name: "Name", value: "name" },
          { name: "Screen Name", value: "screen-name" },
        ]}
        onChangeSortBy={handleChangeSortBy}
        onClickSortOrder={handleClickSortOrder}
        type="lists"
        classes={{ section: classes.actions }}
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
            items={currentCount}
            onDelete={editable ? handleDelete : null}
            deleteLabel={deleteLabel}
          />
        );
      })}
      <Pagination
        {...paginationProps}
        count={Math.ceil((currentCount ?? 0) / (pageSize || 10))}
        onChangePage={handleClickPage}
        onChangePageSize={handleClickPageSize}
        page={page}
        pageSize={pageSize}
      />
    </Section>
  );
}

AccountsList.propTypes = {
  addAccountLabel: PropTypes.string,
  apiUrl: PropTypes.string,
  data: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({})),
    count: PropTypes.number,
    is_private: PropTypes.bool,
    name: PropTypes.string,
    page: PropTypes.number,
    pageSize: PropTypes.number,
  }),
  deleteLabel: PropTypes.string,
  editable: PropTypes.bool,
  paginationProps: PropTypes.shape({}),
};

AccountsList.defaultProps = {
  addAccountLabel: undefined,
  apiUrl: undefined,
  data: undefined,
  deleteLabel: undefined,
  editable: false,
  paginationProps: undefined,
};

export default AccountsList;
