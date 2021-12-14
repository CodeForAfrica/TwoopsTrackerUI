import { Button, Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import ContentActions from "@/twoopstracker/components/ContentActions";
import ListCard from "@/twoopstracker/components/ListCard";
import ListModal from "@/twoopstracker/components/ListModal";
import Pagination from "@/twoopstracker/components/Pagination";
import fetchJson from "@/twoopstracker/utils/fetchJson";
import getQueryString from "@/twoopstracker/utils/getQueryString";

// NOTE (Gertrude) useStyles needs to be imported at this level, otherwise on page
// refresh some styles break
// eslint-disable-next-line import/order
import useStyles from "./useStyles";

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

  const fetcher = (url, pg, pSize) => {
    const queryString = getQueryString({
      page: pg,
      pageSize: pSize,
    });
    let listURL = url;
    if (queryString) {
      listURL = `${listURL}?${queryString}`;
    }

    return fetchJson(listURL);
  };
  const { data, mutate } = useSWR([`/api/lists`, page, pageSize], fetcher);

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

    if (event.target.name === "status") {
      setPrivacy(event.target.checked);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h2">Your Lists</Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
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
          <ContentActions
            apiUri="/api/lists"
            classes={{ section: classes.actions }}
            type="lists"
          />
          <Grid container>
            {lists?.map((item) => (
              <Grid item xs={12}>
                <ListCard
                  key={item.name}
                  classes={{ root: classes.listItem }}
                  {...item}
                  mutate={mutate}
                />
              </Grid>
            ))}
          </Grid>
          <Pagination
            {...paginationProps}
            count={Math.ceil((data?.count ?? 0) / (pageSize || 10))}
            onChangePage={handleClickPage}
            onChangePageSize={handleClickPageSize}
            page={page}
            pageSize={pageSize}
            classes={{ section: classes.pagination }}
          />
        </>
      ) : (
        <Typography variant="body1">There are no lists</Typography>
      )}
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
