import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/twoopstracker/components/Link";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    paddingBottom: typography.pxToRem(10),
    paddingTop: typography.pxToRem(30),
  },
  button: {
    padding: `${typography.pxToRem(10)} ${typography.pxToRem(20)}`,
    marginRight: typography.pxToRem(10),
  },
  text: {
    fontFamily: typography.h4.fontFamily,
    paddingTop: typography.pxToRem(7),
  },
  date: {
    fontFamily: typography.h4.fontFamily,
    marginBottom: typography.pxToRem(30),
  },
}));

function UserSearchCard({
  name,
  query,
  created_at: createdAt,
  datePrefix,
  keywordPrefix,
  queryPrefix,
  ...props
}) {
  const classes = useStyles(props);
  const date = new Date(createdAt);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <Typography variant="h4">{name}</Typography>
          {query?.term && (
            <Typography
              variant="body1"
              className={classes.text}
            >{`${keywordPrefix}${query.term}`}</Typography>
          )}
          {query && (
            <Typography
              variant="body1"
              className={classes.text}
            >{`${queryPrefix}${Object.keys(query).join(", ")}`}</Typography>
          )}
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          container
          justify="flex-end"
          alignItems="flex-end"
          direction="column"
        >
          <Grid item>
            <Typography
              variant="body1"
              className={classes.date}
            >{`${datePrefix}${date.toISOString().substr(0, 10)}`}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              color="primary"
              component={Link}
              href="/explore"
              className={classes.button}
            >
              Load
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

UserSearchCard.propTypes = {
  name: PropTypes.string,
  query: PropTypes.shape({
    term: PropTypes.string,
  }),
  created_at: PropTypes.string,
  datePrefix: PropTypes.string,
  keywordPrefix: PropTypes.string,
  queryPrefix: PropTypes.string,
};

UserSearchCard.defaultProps = {
  name: undefined,
  query: undefined,
  created_at: undefined,
  datePrefix: "Saved on ",
  keywordPrefix: "Keyword: ",
  queryPrefix: "Filters applied: ",
};

export default UserSearchCard;
