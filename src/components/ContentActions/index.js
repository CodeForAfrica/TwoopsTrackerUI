import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";
import { contentActionsProps } from "@/twoopstracker/config";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {},
  section: {
    borderBottom: "1px solid #00000040",
    paddingBottom: typography.pxToRem(28),
  },
  button: {
    maring: `auto ${typography.pxToRem(12)}`,
    color: palette.secondary.main,
    fontSize: typography.body2.fontSize,
  },
  label: {
    display: "inline-flex",
    fontFamily: typography.button.fontFamily,
  },
}));

function ContentActions({ searches: searchesProp, paginationProps, ...props }) {
  const classes = useStyles(props);
  const { download } = contentActionsProps;

  const onClickDownload = () => {};

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography className={classes.label} variant="body2">
              {download.label}
            </Typography>
            {download.fileTypes?.map((type) => (
              <Button
                className={classes.button}
                variant="text"
                onClick={onClickDownload}
              >
                {type}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

ContentActions.propTypes = {
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

ContentActions.defaultProps = {
  paginationProps: undefined,
  searches: undefined,
};

export default ContentActions;
