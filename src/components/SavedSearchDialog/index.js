import { Button, Grid, Dialog, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles(({ palette, typography }) => ({
  button: {
    padding: `${typography.pxToRem(10)} ${typography.pxToRem(20)}`,
    marginLeft: typography.pxToRem(10),
    marginTop: typography.pxToRem(10),
  },
  dialog: {
    padding: typography.pxToRem(30),
  },
  text: {
    fontFamily: typography.h4.fontFamily,
    paddingTop: typography.pxToRem(7),
  },
  title: {
    fontFamily: typography.h1.fontFamily,
    color: palette.text.primary,
  },
}));

function SavedSearchDialog({
  name: nameProp,
  query: queryProp,
  onClick,
  onClose,
  open,
  title,
  variant,
  ...props
}) {
  const classes = useStyles(props);
  const [name, setName] = useState(nameProp);
  const [query, setQuery] = useState(queryProp);

  const handleClick = () => {
    if (onClick) {
      if (variant === "add") {
        onClick(name);
      } else {
        onClick(name, query);
      }
    }
  };

  const handleClose = () => {
    setName("");
    setQuery("");
    if (onClose) {
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.dialog }}
      maxWidth="md"
      fullWidth
    >
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            type="text"
            variant="outlined"
            inputProps={{
              placeholder: "Enter Name",
            }}
            fullWidth
          />
        </Grid>
        {variant === "edit" && (
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="normal"
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              label="Query"
              type="text"
              variant="outlined"
              inputProps={{
                placeholder: "Query",
              }}
              fullWidth
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

SavedSearchDialog.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  query: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["add", "edit"]),
};

SavedSearchDialog.defaultProps = {
  name: undefined,
  onClick: undefined,
  onClose: undefined,
  open: undefined,
  query: undefined,
  title: undefined,
  variant: undefined,
};

export default SavedSearchDialog;
