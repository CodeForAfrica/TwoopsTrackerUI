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
    width: typography.pxToRem(320),
    marginTop: typography.pxToRem(16),
    padding: `${typography.pxToRem(0)} ${typography.pxToRem(16)}`,
    marginLeft: 0,
    [breakpoints.up("md")]: {
      marginLeft: typography.pxToRem(-48),
    },
  },
  menuList: {
    padding: typography.pxToRem(24),
  },
  profile: {
    padding: `${typography.pxToRem(16)} ${typography.pxToRem(0)}`,
  },
  logOutLabel: {
    fontSize: typography.pxToRem(20),
    fontFamily: typography.fontFamily,
    fontWeight: 500,
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
  logOutText: {
    padding: `${typography.pxToRem(16)} ${typography.pxToRem(38)}`,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "#DB1111",
    },
  },
  caption: {
    fontSize: typography.pxToRem(20),
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

function UserProfile({ label, src, alt, profileList, ...props }) {
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
                className={classes.profile}
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
                  className={classes.menuList}
                >
                  {profileList?.map((item) => (
                    <MenuItem
                      onClick={handleClose}
                      component={!profileList.length - 1 ? Link : null}
                      href={!profileList.length - 1 ? item.href : ""}
                      className={classes.menuItem}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
              <Divider />
              <Button
                color="default"
                variant="text"
                size="small"
                onClick={() =>
                  signOut({
                    callbackUrl: `/`,
                    handleClose,
                  })
                }
                classes={{
                  text: classes.logOutText,
                }}
              >
                <Typography variant="body1" className={classes.logOutLabel}>
                  Log Out
                </Typography>
              </Button>
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
  profileList: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

UserProfile.defaultProps = {
  label: undefined,
  alt: undefined,
  src: undefined,
};

export default UserProfile;
