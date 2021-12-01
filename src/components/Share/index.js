import {
  Popper,
  Fade,
  Paper,
  IconButton,
  ClickAwayListener,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { ReactComponent as Icon } from "@/twoopstracker/assets/icons/share-closed.svg";
import ShareButton from "@/twoopstracker/components/ShareButton";
import { shareData } from "@/twoopstracker/config";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    textAlign: "right",
  },
  popper: {},
  paper: {
    background: palette.background.default,
    borderRadius: 0,
    boxShadow: "none",
  },
  button: {
    padding: 0,
    height: typography.pxToRem(24),
    width: typography.pxToRem(24),
  },
  social: {
    marginRight: typography.pxToRem(20),
  },
}));

function Share({ title, ...props }) {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = useState(null);

  const onClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };
  const shareLists = shareData(title);

  return (
    <div className={classes.root}>
      <IconButton onClick={onClick} className={classes.button}>
        <Icon />
      </IconButton>
      <Popper
        open={Boolean(anchorEl)}
        placement="left"
        anchorEl={anchorEl}
        className={classes.popper}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <ClickAwayListener onClickAway={onClose}>
              <Paper className={classes.paper}>
                {shareLists.map((social) => (
                  <ShareButton
                    name={social.name}
                    key={social.name}
                    url="/"
                    {...social.props}
                    classes={{ root: classes.social }}
                  />
                ))}
              </Paper>
            </ClickAwayListener>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

Share.propTypes = {
  title: PropTypes.string,
};

Share.defaultProps = {
  title: undefined,
};

export default Share;
