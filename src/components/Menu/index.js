import { Grid, Button, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useSession } from "next-auth/react";
import PropTypes from "prop-types";
import React from "react";

import userAvator from "@/twoopstracker/assets/icons/avator.svg";
import Link from "@/twoopstracker/components/Link";
import LoginMenu from "@/twoopstracker/components/LoginMenu";
import UserProfile from "@/twoopstracker/components/UserProfile";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    [breakpoints.up("md")]: {
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
    textAlign: "right",
    textTransform: "capitalize",
  },
  menu: {
    margin: 0,
    [breakpoints.up("md")]: {
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
    [breakpoints.up("md")]: {
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
  children,
  logOutLabel,
  login,
  profilePages,
  main,
  accountLink,
  ...props
}) {
  const classes = useStyles(props);
  const { data: session } = useSession();

  if (!main?.length) {
    return null;
  }

  return (
    <Grid container className={classes.root}>
      {main.map((item) => (
        <Grid item key={item.label} className={classes.menu}>
          <Button
            component={Link}
            variant="text"
            size="large"
            href={item.href}
            classes={{
              root: classes.menuLinks,
              text: classes.text,
            }}
          >
            <Typography variant="body2" className={classes.label}>
              {item.label}
            </Typography>
          </Button>
        </Grid>
      ))}
      <Grid item>
        {session && session.user ? (
          <UserProfile
            label={session.user.firstName}
            alt={session.user.firstName}
            src={session.user?.image !== "" ? session.user?.image : userAvator}
            logOutLabel={logOutLabel}
            profilePages={profilePages}
            accountLink={accountLink}
          />
        ) : (
          <LoginMenu items={login} />
        )}
        {children}
      </Grid>
    </Grid>
  );
}

Menu.propTypes = {
  logOutLabel: PropTypes.string.isRequired,
  login: PropTypes.arrayOf(PropTypes.shape({})),
  main: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  profilePages: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  accountLink: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  children: PropTypes.node,
};

Menu.defaultProps = {
  login: undefined,
  main: undefined,
  children: undefined,
};
export default Menu;
