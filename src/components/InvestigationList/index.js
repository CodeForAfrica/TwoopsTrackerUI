import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import InvestigationCard from "@/twoopstracker/components/InvestigationsCard";
import Pagination from "@/twoopstracker/components/Pagination";
import Section from "@/twoopstracker/components/Section";

function InvestigationList({ items, paginationProps, ...props }) {
  const classes = useStyles(props);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleClickPage = (e, value) => {
    setPage(value);
  };

  const handleClickPageSize = (e, value) => {
    // Changing pageSize triggers computation of number of pages.
    setPage(1);
    setPageSize(value);
  };

  if (!items?.length) {
    return null;
  }
  return (
    <Section>
      <Grid container justifyContent="space-between" className={classes.root}>
        <Grid item>
          <InvestigationCard
            featured
            {...items[page - 1]}
            className={{ root: classes.media }}
          />
        </Grid>

        <Grid container direction="row" className={classes.title}>
          {items.slice((page - 1) * pageSize, page * pageSize).map((item) => (
            <Grid item lg={6} key={item.title}>
              <InvestigationCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Pagination
        {...paginationProps}
        count={Math.ceil((items?.length ?? 0) / pageSize)}
        onChangePage={handleClickPage}
        onChangePageSize={handleClickPageSize}
        page={page}
        pageSize={pageSize}
        classes={{ section: classes.pagination }}
      />
    </Section>
  );
}

InvestigationList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  paginationProps: PropTypes.string,
};
InvestigationList.defaultProps = {
  items: undefined,
  paginationProps: undefined,
};
export default InvestigationList;
