import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import useStyles from "./useStyles";

import ListCard from "@/twoopstracker/components/ListCard";
import ListModal from "@/twoopstracker/components/ListModal";
import Pagination from "@/twoopstracker/components/Pagination";
import fetchJson from "@/twoopstracker/utils/fetchJson";
import getQueryString from "@/twoopstracker/utils/getQueryString";

function Lists({ results: listsProp, paginationProps, ...props }) {
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState(listsProp ? listsProp.results : []);
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [page, setPage] = useState();
  const [pageSize, setPageSize] = useState(5);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles(props);

  const fetcher = (url, pg) => {
    const queryString = getQueryString({ page: pg });
    return fetchJson(`${url}/?${queryString}`);
  };
  const { data, mutate } = useSWR([`/api/lists`, page], fetcher);

  useEffect(() => {
    if (data) {
      setLists(data.results);
    }
  }, [data]);

  const handleClickPage = (e, value) => {
    setPage(value);
  };
  const handleClickPageSize = (e, value) => {
    setPage(1);
    setPageSize(value);
  };

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
      await fetchJson("/api/lists", null, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      mutate();
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
      <Pagination
        {...paginationProps}
        count={Math.ceil(listsProp?.count / (pageSize || 10))}
        onChangePage={handleClickPage}
        onChangePageSize={handleClickPageSize}
        page={page}
        pageSize={pageSize}
        classes={{ section: classes.pagination }}
      />
    </div>
  );
}

Lists.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  paginationProps: PropTypes.shape({}),
};

Lists.defaultProps = {
  results: undefined,
  paginationProps: undefined,
};

export default Lists;
