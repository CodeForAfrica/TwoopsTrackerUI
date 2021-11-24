import { Button, Grid, Dialog, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles(({ palette, typography }) => ({
  button: {
    padding: `${typography.pxToRem(10)} ${typography.pxToRem(20)}`,
    marginLeft: typography.pxToRem(10),
    borderRadius: typography.pxToRem(50),
    color: palette.text.primary,
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
  term,
  onClick,
  onClose,
  open,
  title,
  variant,
  ...props
}) {
  const classes = useStyles(props);
  const [name, setName] = useState(nameProp);
  const [keyword, setKeyword] = useState(term);

  const handleClick = () => {
    if (onClick) {
      if (variant === "add") {
        onClick(name);
      } else {
        onClick(name, keyword);
      }
    }
  };

  const handleClose = () => {
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
      <Grid>
        <Typography variant="body1">Enter a name for your search</Typography>
      </Grid>
      <Grid>
        <TextField
          autoFocus
          margin="normal"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          type="text"
          color="secondary"
          fullWidth
        />
      </Grid>
      {variant === "edit" && (
        <Grid>
          <TextField
            autoFocus
            margin="normal"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            label="Keyword"
            type="text"
            color="secondary"
            fullWidth
          />
        </Grid>
      )}
      <Grid>
        <Button
          onClick={handleClose}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClick}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Save
        </Button>
      </Grid>
    </Dialog>
  );
}

SavedSearchDialog.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  term: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["add", "edit"]),
};

SavedSearchDialog.defaultProps = {
  name: undefined,
  onClick: undefined,
  onClose: undefined,
  open: undefined,
  term: undefined,
  title: undefined,
  variant: undefined,
};

export default SavedSearchDialog;
