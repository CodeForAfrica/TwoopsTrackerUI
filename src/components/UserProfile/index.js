import {
  Typography,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  Grow,
  Paper,
  Popper,
  Grid,
  Divider,
  ClickAwayListener,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { signOut, useSession } from "next-auth/client";
import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";

import Link from "@/twoopstracker/components/Link";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: typography.pxToRem(-8),
    [breakpoints.up("lg")]: {
      padding: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
  paper: {
    width: "20rem",
    marginTop: "1rem",
    padding: "0rem 1rem",
    marginLeft: "-3rem",
  },
  menuList: {
    marginTop: "1.2rem",
  },
  menuItem: {
    color: "black",
    fontSize: "24px",
    padding: typography.pxToRem(12.8),
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "#DB1111",
    },
  },
  caption: {
    fontSize: "24px",
    fontWeight: "normal",
    display: "inline-block",
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
  menuLinks: {
    color: "black",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "black",
    },
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(7)} ${typography.pxToRem(18)}`,
      color: "black",
      "&:hover, &:focus, &:focus-within": {
        color: "black",
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    },
  },
  large: {
    width: 48,
    height: 48,
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

function UserProfile({ label, src, alt, ...props }) {
  const classes = useStyles(props);
  const [session] = useSession();

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
        size="large"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        classes={{
          root: classes.menuLinks,
          text: classes.text,
        }}
        endIcon={<Avatar alt={alt} src={src} className={classes.large} />}
      >
        <Typography variant="body1" className={classes.label}>
          {label}
        </Typography>
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
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper
              classes={{
                root: classes.paper,
              }}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ padding: "2rem 0rem" }}
              >
                <Avatar
                  alt={alt}
                  src={session?.user?.image}
                  className={classes.large}
                />
                <Typography variant="body2" className={classes.caption}>
                  {session?.user?.name}
                </Typography>
                <Typography variant="body2" className={classes.caption}>
                  {session?.user?.email}
                </Typography>
              </Grid>
              <Divider />

              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  className={{ classes: classes.menuList }}
                >
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    href="/lists"
                    className={classes.menuItem}
                  >
                    List
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    href="/searches"
                    className={classes.menuItem}
                  >
                    Saved searches
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    href="/data"
                    className={classes.menuItem}
                  >
                    Upload data
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    href="/account/settings"
                    className={classes.menuItem}
                  >
                    Account
                  </MenuItem>

                  <Divider />

                  <MenuItem
                    className={classes.menuItem}
                    onClick={() =>
                      signOut({
                        callbackUrl: `/`,
                        handleClose,
                      })
                    }
                  >
                    Log Out
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

UserProfile.propTypes = {
  label: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
};

UserProfile.defaultProps = {
  label: undefined,
  alt: undefined,
  src: undefined,
};

export default UserProfile;
