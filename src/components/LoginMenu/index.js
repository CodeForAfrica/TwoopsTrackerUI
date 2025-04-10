import { Grid, Button, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

import Image from "@/twoopstracker/components/Image";
import Link from "@/twoopstracker/components/Link";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    [breakpoints.up("md")]: {
      padding: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
  links: {
    color: "black",
    margin: `${typography.pxToRem(10)} ${typography.pxToRem(-8)}`,
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
  label: {
    textAlign: "right",
    textTransform: "capitalize",
  },
  menu: {
    margin: 0,
    [breakpoints.up("md")]: {
      marginRight: typography.pxToRem(15),
      "&:last-of-type": {
        marginRight: 0,
      },
    },
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
  menuLinks: {
    color: "#DB1111",
    margin: `${typography.pxToRem(10)} ${typography.pxToRem(-8)}`,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "#DB1111",
    },
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(7)} ${typography.pxToRem(18)}`,
      color: "#DB1111",
      "&:hover, &:focus, &:focus-within": {
        color: "#DB1111",
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    },
  },
}));

function LoginMenu({ items, children, ...props }) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      {items.map((item, index) => (
        <Grid item key={item.label} className={classes.menu}>
          <Button
            component={Link}
            variant="text"
            size="large"
            href={item.href}
            classes={{
              root:
                index !== items.length - 1 ? classes.menuLinks : classes.links,
              text: classes.text,
            }}
            startIcon={
              item.icon ? (
                <Image height={24} width={24} {...item.icon} />
              ) : undefined
            }
          >
            <Typography variant="body2" className={classes.label}>
              {item.label}
            </Typography>
          </Button>
        </Grid>
      ))}
    </div>
  );
}

LoginMenu.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};

LoginMenu.defaultProps = {
  children: undefined,
  items: undefined,
};
export default LoginMenu;
