import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import Loading from "@/twoopstracker/components/Loading";
import Pagination from "@/twoopstracker/components/Pagination";
import UserSearchCard from "@/twoopstracker/components/UserSearchCard";
import { fetchJson } from "@/twoopstracker/lib";
import getQueryString from "@/twoopstracker/utils/getQueryString";

const useStyles = makeStyles(() => ({
  root: {},
}));

function UserSearch({ searches: searchesProp, paginationProps, ...props }) {
  const classes = useStyles(props);

  const [page, setPage] = useState();
  const [searches, setSearches] = useState(searchesProp);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [pageSize, setPageSize] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickPage = (e, value) => {
    setPage(value);
    setShouldFetch(true);
  };
  const handleClickPageSize = (e, value) => {
    setPage(1);
    setPageSize(value);
    setShouldFetch(true);
  };

  const fetchSearches = (url, pg, pSize) => {
    const queryString = getQueryString({ page: pg, pageSize: pSize });
    return fetchJson(`${url}/${queryString}`);
  };

  const handleDeleteSearch = async (id) => {
    const res = await fetchJson(`/api/account/searches/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      setShouldFetch(true);
    }
  };

  const { data, error } = useSWR(
    shouldFetch ? [`/api/account/searches`, page, pageSize] : null,
    fetchSearches
  );

  useEffect(() => {
    if (data) {
      setSearches(data);
      setIsLoading(false);
    } else if (shouldFetch && !(data || error)) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    setShouldFetch(false);
  }, [data, error]);

  return (
    <div className={classes.root}>
      {isLoading && <Loading />}
      {searches?.results?.length ? (
        <>
          <Grid container>
            {searches?.results?.map((item) => (
              <Grid item xs={12}>
                <UserSearchCard
                  {...item}
                  key={item.created_at}
                  onDelete={handleDeleteSearch}
                />
              </Grid>
            ))}
          </Grid>
          <Pagination
            {...paginationProps}
            count={Math.ceil(searches?.count / (pageSize || 3))}
            onChangePage={handleClickPage}
            onChangePageSize={handleClickPageSize}
            page={page}
            pageSize={pageSize}
          />
        </>
      ) : (
        <Typography>You have no saved search</Typography>
      )}
    </div>
  );
}

UserSearch.propTypes = {
  paginationProps: PropTypes.shape({}),
  searches: PropTypes.shape({
    count: PropTypes.number,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        created_at: PropTypes.string,
      })
    ),
  }),
};

UserSearch.defaultProps = {
  paginationProps: undefined,
  searches: undefined,
};

export default UserSearch;
