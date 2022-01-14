import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { differenceInCalendarDays } from "date-fns";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Link from "@/twoopstracker/components/Link";
import SavedSearchDialog from "@/twoopstracker/components/SavedSearchDialog";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    paddingBottom: typography.pxToRem(10),
    paddingTop: typography.pxToRem(30),
  },
  button: {
    padding: `${typography.pxToRem(10)} ${typography.pxToRem(20)}`,
    marginRight: typography.pxToRem(10),
    borderRadius: typography.pxToRem(50),
    color: palette.text.primary,
  },
  text: {
    paddingTop: typography.pxToRem(7),
  },
  date: {
    marginBottom: typography.pxToRem(20),
  },
  grid: {
    [breakpoints.up("xl")]: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  },
  title: {
    "&:hover": {
      color: palette.primary.main,
    },
  },
}));

function UserSearchCard({
  id,
  name,
  query: queryObj,
  created_at: createdAt,
  onDelete,
  onEdit,
  datePrefix,
  keywordPrefix,
  queryPrefix,
  ...props
}) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (queryObj) {
      const { startDate, endDate, term, ...rest } = queryObj;
      const days = differenceInCalendarDays(
        new Date(endDate),
        new Date(startDate)
      );
      let theme;
      let query;

      if (term) {
        const terms = term?.match("[(](.+)(AND)(.+)[)]");
        if (terms?.length) {
          const userQuery = terms[1];
          const userTheme = terms[3];

          if (userQuery.trim() === userTheme.trim()) {
            theme = userTheme.trim();
          } else {
            query = userQuery.trim();
            theme = userTheme.trim();
          }
        } else {
          query = term;
        }
      }
      let p = { ...rest, days };
      if (theme) {
        p = { ...p, theme };
      }
      if (query) {
        p = { ...p, query };
      }
      setParams(p);
    }
  }, [queryObj]);

  const date = new Date(createdAt);
  const searchUrl = () => {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach((k) => searchParams.append(k, params[k]));
    return `/explore/?${searchParams.toString()}`;
  };
  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const handleEdit = (n, t) => {
    let sterm = t;
    if (params?.theme) {
      sterm = `( ${sterm} AND ${params?.theme})`;
    }
    const updatedQ = { ...queryObj, term: sterm };
    setOpen(false);
    if (onEdit) {
      onEdit(id, n, updatedQ);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={8} xs={12}>
          <Typography
            variant="h4"
            component={Link}
            href={searchUrl()}
            underline="none"
            color="secondary"
            className={classes.title}
          >
            {name}
          </Typography>
          {params?.query && (
            <Typography
              variant="body1"
              className={classes.text}
            >{`${keywordPrefix}${params.query}`}</Typography>
          )}
          {params && (
            <Typography
              variant="body1"
              className={classes.text}
            >{`${queryPrefix}${Object.keys(params).join(", ")}`}</Typography>
          )}
        </Grid>
        <Grid
          item
          lg={4}
          xs={12}
          container
          direction="column"
          className={classes.grid}
        >
          <Grid item>
            <Typography
              variant="body1"
              className={classes.date}
            >{`${datePrefix}${date.toISOString().substr(0, 10)}`}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
              className={classes.button}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <SavedSearchDialog
        open={open}
        name={name}
        query={params?.query}
        onClick={handleEdit}
        onClose={handleClose}
        variant="edit"
        title="Edit Search"
      />
    </div>
  );
}

UserSearchCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  query: PropTypes.shape({
    endDate: PropTypes.string,
    startDate: PropTypes.string,
    term: PropTypes.string,
  }),
  created_at: PropTypes.string,
  datePrefix: PropTypes.string,
  keywordPrefix: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  queryPrefix: PropTypes.string,
};

UserSearchCard.defaultProps = {
  id: undefined,
  name: undefined,
  query: undefined,
  created_at: undefined,
  onDelete: undefined,
  onEdit: undefined,
  datePrefix: "Saved on ",
  keywordPrefix: "Keyword: ",
  queryPrefix: "Filters applied: ",
};

export default UserSearchCard;
