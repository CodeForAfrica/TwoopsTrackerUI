import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSession } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/twoopstracker/components/Link";
import LoginMenu from "@/twoopstracker/components/LoginMenu";
import UserProfile from "@/twoopstracker/components/UserProfile";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    [breakpoints.up("lg")]: {
      padding: 0,
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  },
  links: {
    marginTop: "0.5rem",
    borderRadius: 0,
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
  menu: {
    margin: 0,
    [breakpoints.up("lg")]: {
      marginRight: typography.pxToRem(15),
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
}));

function Menu({
  links,
  children,
  loginMenuProps,
  avatorProps,
  label,
  ...props
}) {
  const classes = useStyles(props);
  const [session] = useSession();

  if (!links?.length) {
    return null;
  }

  return (
    <Grid container className={classes.root}>
      {links.map((item) => (
        <Grid item key={item.label} className={classes.menu}>
          <Button
            component={Link}
            color="default"
            variant="text"
            size="large"
            href={item.href}
            classes={{
              root: classes.menuLinks,
              text: classes.text,
            }}
          >
            <Typography variant="body1" className={classes.label}>
              {item.label}
            </Typography>
          </Button>
        </Grid>
      ))}
      {session?.user?.name ? (
        <UserProfile label={session.user.name} avatorProps={avatorProps} />
      ) : (
        <LoginMenu links={loginMenuProps} />
      )}

      {children}
    </Grid>
  );
}

Menu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  loginMenuProps: PropTypes.arrayOf(PropTypes.shape({})),
  label: PropTypes.string,
  avatorProps: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  children: PropTypes.node,
};

Menu.defaultProps = {
  loginMenuProps: undefined,
  label: undefined,
  avatorProps: undefined,
  children: undefined,
};
export default Menu;
