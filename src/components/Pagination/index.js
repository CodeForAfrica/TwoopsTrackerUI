import { Grid } from "@material-ui/core";
import { Pagination as MuiPagination } from "@material-ui/lab";
import PropTypes from "prop-types";
import React from "react";

import PageSize from "./PageSize";
import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";

function Pagination({
  count,
  onChangePage,
  onChangePageSize,
  page,
  pageSize,
  pageSizeLabel,
  pageSizeOptions,
  pageSizeDefaultValue,
  ...props
}) {
  const classes = useStyles(props);

  const handleChangePageSize = (e, v) => {
    if (onChangePageSize) {
      if (v) {
        onChangePageSize(e, v);
      }
    }
  };
  const key = `${page || ""}${pageSize || ""}`;
  return (
    <div key={key} className={classes.root}>
      <Section className={classes.section}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <MuiPagination
              count={count}
              onChange={onChangePage}
              page={page}
              className={classes.paginationButton}
            />
          </Grid>
          <Grid item>
            <PageSize
              label={pageSizeLabel}
              options={pageSizeOptions}
              value={pageSize || pageSizeDefaultValue}
              onChange={handleChangePageSize}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

Pagination.propTypes = {
  count: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangePageSize: PropTypes.func,
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pageSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pageSizeDefaultValue: PropTypes.string,
  pageSizeLabel: PropTypes.string,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.shape({})),
};

Pagination.defaultProps = {
  count: undefined,
  onChangePage: undefined,
  onChangePageSize: undefined,
  page: undefined,
  pageSize: undefined,
  pageSizeDefaultValue: undefined,
  pageSizeLabel: undefined,
  pageSizeOptions: undefined,
};

export default Pagination;
