import { RichTypography } from "@commons-ui/core";
import {
  Popper,
  Fade,
  Paper,
  Typography,
  IconButton,
  ClickAwayListener,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { ReactComponent as HelpIcon } from "@/twoopstracker/assets/icons/help-circle.svg";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {},
  popper: {},
  paper: {
    background: palette.background.default,
    border: `1px solid ${palette.grey.light}`,
    width: typography.pxToRem(180),
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: 0,
    marginTop: typography.pxToRem(-40),
  },
  header: {
    background: palette.background.paper,
    height: typography.pxToRem(36),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: typography.pxToRem(16),
    paddingRight: typography.pxToRem(10),
  },
  title: {
    fontSize: typography.pxToRem(11),
    lineHeight: 17 / 11,
    color: "#666666",
  },
  button: {
    padding: 0,
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
          <Fade {...TransitionProps} timeout={350}>
            <ClickAwayListener onClickAway={handleClose}>
              <Paper className={classes.paper}>
                <Typography variant="h4">{title}</Typography>
                <RichTypography variant="body2">{description}</RichTypography>
              </Paper>
            </ClickAwayListener>
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
