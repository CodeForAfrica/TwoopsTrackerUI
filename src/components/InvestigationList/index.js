import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import InvestigationCard from "@/twoopstracker/components/InvestigationsCard";
import Section from "@/twoopstracker/components/Section";

function InvestigationList({ items, ...props }) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <Section>
      <Grid container justifyContent="space-between" className={classes.root}>
        <Grid item>
          <InvestigationCard featured {...items[0]} />
        </Grid>

        {items.slice(1).map((item) => (
          <Grid item lg={6} key={item.title}>
            <InvestigationCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

InvestigationList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};
InvestigationList.defaultProps = {
  items: undefined,
};
export default InvestigationList;
