import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";

import Loading from "@/twoopstracker/components/Loading";
import Pagination from "@/twoopstracker/components/Pagination";
import UserSearchCard from "@/twoopstracker/components/UserSearchCard";
import getQueryString from "@/twoopstracker/utils/getQueryString";

const useStyles = makeStyles(() => ({
  root: {},
  pagination: {
    width: "100%",
  },
}));

function UserSearch({ searches: searchesProp, paginationProps, ...props }) {
  const classes = useStyles(props);

  const [page, setPage] = useState();
  const [searches, setSearches] = useState(searchesProp);
  const [pageSize, setPageSize] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useSWRConfig();

  const handleClickPage = (e, value) => {
    setPage(value);
  };
  const handleClickPageSize = (e, value) => {
    setPage(1);
    setPageSize(value);
  };

  const fetchSearches = (url, pg, pSize) => {
    const queryString = getQueryString({ page: pg, pageSize: pSize });
    return fetch(`${url}/?${queryString}`).then((res) => res.json());
  };

  const { data, error } = useSWR(
    [`/api/searches`, page, pageSize],
    fetchSearches
  );

  const handleDeleteSearch = async (id) => {
    await fetch(`/api/searches/${id}`, {
      method: "DELETE",
    });
    mutate([`/api/searches`, page, pageSize]);
  };

  const handleEditSearch = async (id, name, query) => {
    await fetch(`/api/searches/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        query,
      }),
    });
    mutate([`/api/searches`, page, pageSize]);
  };

  useEffect(() => {
    if (data) {
      setSearches(data);
      setIsLoading(false);
    } else if (!data && !error) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
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
                  onEdit={handleEditSearch}
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
            classes={{ section: classes.pagination }}
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
