import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { differenceInCalendarDays } from "date-fns";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Link from "@/twoopstracker/components/Link";
import SaveSearchDialog from "@/twoopstracker/components/SaveSearchDialog";

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
    fontFamily: typography.h4.fontFamily,
    paddingTop: typography.pxToRem(7),
  },
  title: {
    fontFamily: typography.h1.fontFamily,
    color: palette.text.primary,
  },
  date: {
    fontFamily: typography.h4.fontFamily,
    marginBottom: typography.pxToRem(30),
  },
  grid: {
    [breakpoints.up("lg")]: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  },
}));

function UserSearchCard({
  id,
  name,
  query,
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const date = new Date(createdAt);

  const searchUrl = () => {
    const { startDate, endDate, ...rest } = query;
    const searchParams = new URLSearchParams();

    const days = differenceInCalendarDays(
      new Date(endDate),
      new Date(startDate)
    );
    Object.keys(rest).forEach((k) => searchParams.append(k, rest[k]));
    searchParams.append("days", days);
    return `/explore/?${searchParams.toString()}`;
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const handleEdit = (n) => {
    setOpen(false);
    if (onEdit) {
      onEdit(id, n, query);
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
            className={classes.title}
          >
            {name}
          </Typography>
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
      <SaveSearchDialog
        open={open}
        name={name}
        onClick={handleEdit}
        onClose={handleClose}
        varinat="edit"
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
