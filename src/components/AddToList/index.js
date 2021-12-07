import {
  Typography,
  Button,
  Popper,
  Paper,
  Grow,
  MenuList,
  MenuItem,
  ClickAwayListener,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  paper: {
    width: typography.pxToRem(150),
    padding: `${typography.pxToRem(0)} ${typography.pxToRem(16)}`,
    marginLeft: 0,
  },
  menuList: {},
  addToList: {
    color: "black",
    display: "flex",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "black",
    },
    [breakpoints.up("lg")]: {
      color: "black",
      "&:hover, &:focus, &:focus-within": {
        color: "black",
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    },
  },
  menuItem: {
    color: "black",
    fontSize: typography.pxToRem(20),
    padding: typography.pxToRem(12.8),
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "#DB1111",
    },
  },
  label: {
    fontSize: typography.pxToRem(24),
    fontFamily: typography.h4.fontFamily,
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "149.49%",
    textAlign: "right",
    textTransform: "capitalize",
  },
  text: {
    "&::after": {
      content: '""',
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      marginLeft: 0,
      height: 0,
      width: 0,
    },
    "&:hover::after": {
      content: '""',
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      transition: "margin 0.3s ease",
      marginLeft: 0,
      height: 0,
      width: 0,
    },
  },
}));

function AddToList({ results, ...props }) {
  const classes = useStyles(props);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  if (!results?.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Button
        color="default"
        variant="text"
        size="medium"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        classes={{
          root: classes.addToList,
          text: classes.text,
        }}
      >
        <Typography className={classes.list}>Add to List</Typography>
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom",
            }}
          >
            <Paper
              classes={{
                root: classes.paper,
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  className={classes.menuList}
                >
                  {results.map((item) => (
                    <MenuItem key={item.name} className={classes.menuItem}>
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

AddToList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
};

AddToList.defaultProps = {
  results: undefined,
};

export default AddToList;
