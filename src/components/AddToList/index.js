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
import React, { useState, useRef, useEffect } from "react";

import Link from "@/twoopstracker/components/Link";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
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
  text: {},
}));

function AddToList({ ...props }) {
  const classes = useStyles(props);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

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
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    href="/"
                    key="/"
                    className={classes.menuItem}
                  >
                    label
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    href="/"
                    key="/"
                    className={classes.menuItem}
                  >
                    one
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    href="/"
                    key="/"
                    className={classes.menuItem}
                  >
                    two
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default AddToList;
