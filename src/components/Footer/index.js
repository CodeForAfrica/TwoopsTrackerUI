/* eslint-disable react/default-props-match-prop-types */

import { Grid } from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";

function Footer(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section
        classes={{
          root: classes.section,
        }}
      >
        <Grid container direction="row" justifyContent="space-between">
          Footer Content
        </Grid>
      </Section>
    </div>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
