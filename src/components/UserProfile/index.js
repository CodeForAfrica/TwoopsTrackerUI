import { Typography, Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

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
  return (
    <div className={classes.root}>
      <Button
        component={Link}
        color="default"
        variant="text"
        size="large"
        href="/account"
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
