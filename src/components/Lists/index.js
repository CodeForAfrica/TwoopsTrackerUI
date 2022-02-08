import { Typography, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
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

function Lists({
  lists: listsProp,
  page: pageProp,
  pageSize: pageSizeProp,
  paginationProps,
  sort: sortProp,
  ...props
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState(listsProp);
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [sort, setSort] = useState(sortProp);
  const [page, setPage] = useState(parseInt(pageProp, 10) || 1);
  // Changes which page is displayed when either page or sort is changed.
  const [pageSize, setPageSize] = useState(parseInt(pageSizeProp, 10) || 20);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles(props);

  useEffect(() => {
    if (router.isReady) {
      const queryString = getQueryString({
        page,
        pageSize,
        sort,
      });
      const { pathname } = router;
      let newPathname = pathname;
      if (queryString) {
        newPathname = `${newPathname}?${queryString}`;
      }
      router.push(newPathname, newPathname, { shallow: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize, sort, router.isReady]);

  const paginate = (newPage) => {
    if (newPage) {
      setPage(newPage);
    }
  };
  const handleClickPage = (_, value) => {
    paginate(value);
  };
  const handleClickPageSize = (_, value) => {
    setPageSize(value);
    paginate(1);
  };
  const handleChangeSortBy = ({ value }) => {
    setSort((prevSort) => {
      const sortOrder = prevSort.startsWith("-") ? "-" : "";
      return `${sortOrder}${value}`;
    });
    paginate();
  };
  const handleClickSortOrder = (e) => {
    e.preventDefault();

    setSort((prevSort) => {
      const sortOrder = prevSort.startsWith("-") ? "" : "-";
      const sortBy = prevSort.replace(/^-/, "");

      return `${sortOrder}${sortBy}`;
    });
    paginate();
  };

  const shouldFetch = () => {
    let url = `/api/lists`;
    const queryString = getQueryString({
      page,
      pageSize,
      sort,
    });
    if (queryString) {
      url = `${url}?${queryString}`;
    }
    return url;
  };
  const fetcher = (url) => {
    return fetchJson(url);
  };

  const { data, error, mutate } = useSWR(shouldFetch, fetcher);

  useEffect(() => {
    if (data) {
      setLists({ ...data });
      setLoading(false);
    } else if (!data && !error) {
      setLoading(true);
    } else {
      setLoading(true);
    }
  }, [data, error]);

  const onCreate = async () => {
    const accountsMap = accounts
      .split(",")
      .map((item) => ({ screen_name: item }));

    const payload = {
      name,
      is_private: privacy,
      accounts: accountsMap,
    };
    setLoading(true);
    try {
      await fetchJson("/api/lists", null, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      mutate();
      setIsError(false);
      setOpen(false);
      setName("");
      setAccounts("");
      setPrivacy(false);
    } catch (e) {
      setOpen(true);
      setLoading(false);
      setIsError(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    }

    if (event.target.name === "accounts") {
      setAccounts(event.target.value);
      setLoading(true);
      setIsError(false);
    }

    if (event.target.name === "status") {
      setPrivacy(event.target.checked);
    }
  };

  const count = Math.ceil((lists?.count ?? 0) / pageSize);
  const newList = (
    <div className={classes.createListModal}>
      <Typography
        onClick={handleOpen}
        variant="body2"
        className={classes.create}
      >
        Create New List
      </Typography>
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
        accountsErrorHelper={
          !isLoading && isError
            ? "Please enter a valid comma-separated list of Twitter usernames."
            : " "
        }
        privacyOnChange={handleChange}
        accountsValue={accounts}
        privacyValue={privacy}
        buttonLabel="Create"
        buttonOnClick={onCreate}
      />
    </div>
  );
  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h2" className={classes.title}>
          Your Lists
        </Typography>
        {lists?.count ? (
          <>
            <ContentActions
              apiUri="/api/lists"
              menuItems={[
                { name: "Created At", value: "created-at" },
                { name: "Name", value: "name" },
              ]}
              onChangeSortBy={handleChangeSortBy}
              onClickSortOrder={handleClickSortOrder}
              sort={sort}
              type="lists"
              classes={{
                section: classes.actions,
                downloadAction: classes.downloadAction,
                sortAction: classes.sortAction,
                otherActions: classes.otherActions,
              }}
            >
              {newList}
            </ContentActions>
            <Grid container>
              {lists?.results?.map((item) => (
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
              count={count}
              onChangePage={handleClickPage}
              onChangePageSize={handleClickPageSize}
              page={page}
              pageSize={pageSize}
              classes={{ section: classes.pagination }}
            />
          </>
        ) : (
          <div className={classes.noLists}>
            {newList}
            <Typography variant="body1">There are no lists</Typography>
          </div>
        )}
      </div>
    </div>
  );
}

Lists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({})),
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pageSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paginationProps: PropTypes.shape({}),
  sort: PropTypes.string,
};

Lists.defaultProps = {
  lists: undefined,
  page: undefined,
  pageSize: undefined,
  paginationProps: undefined,
  sort: undefined,
};

export default Lists;
