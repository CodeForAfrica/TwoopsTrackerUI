import { RichTypography } from "@commons-ui/core";
import {
  Popper,
  Fade,
  Paper,
  Typography,
  IconButton,
  Backdrop,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { ReactComponent as HelpIcon } from "@/twoopstracker/assets/icons/help-circle.svg";

const useStyles = makeStyles(({ palette, typography, zIndex }) => ({
  root: {},
  popper: {
    zIndex: zIndex.modal + 2,
  },
  paper: {
    background: "f7f7f7",
    borderRadius: 0,
    width: typography.pxToRem(795),
    padding: typography.pxToRem(30),
    marginRight: typography.pxToRem(33),
    marginTop: typography.pxToRem(16),
  },
  title: {
    fontFamily: typography.body1.fontFamily,
    marginBottom: typography.pxToRem(44),
    fontWeight: "normal",
  },
  button: {
    padding: 0,
  },
  backdrop: {
    zIndex: zIndex.modal + 1,
    color: "#fff",
  },
  description: {
    background: palette.background.default,
    padding: typography.pxToRem(10),
  },
}));

function SearchGuide({ title, description, ...props }) {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!(title && description)) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Backdrop
        open={Boolean(anchorEl)}
        className={classes.backdrop}
        onClick={handleClose}
      />
      <IconButton
        onClick={handleClick}
        aria-describedby="aria-search-help"
        className={classes.button}
      >
        <HelpIcon />
      </IconButton>
      <Popper
        open={Boolean(anchorEl)}
        placement="bottom-end"
        anchorEl={anchorEl}
        className={classes.popper}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.title}>
                {title}
              </Typography>
              <RichTypography variant="body2" className={classes.description}>
                {description}
              </RichTypography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

SearchGuide.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SearchGuide.defaultProps = {
  title: undefined,
  description: undefined,
};

export default SearchGuide;
