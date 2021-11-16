import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useCallback } from "react";

import saveToken from "@/twoopstracker/lib/saveToken";
import useSession from "@/twoopstracker/lib/useSession";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
    background: "none",
    width: "100vw",
    height: "100vh",
    margin: "auto",
  },
  loginButton: {
    marginBottom: "1rem",
    width: "100%",
    color: "white",
    "&:hover": {
      color: "#000",
    },
    backgroundColor: theme.palette.primary.main,
    fontWeight: 800,
    fontSize: theme.typography.subtitle2.fontSize,
    height: "3rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.subtitle1.fontSize,
      height: "3.5rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
  buttonContainer: {
    paddingTop: "1rem",
    width: "400px",
    [theme.breakpoints.between("xs", "xs")]: {
      width: "95vw",
    },
    "& .MuiLink-underlineHover": {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  formStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    color: "black",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function useQueryParams() {
  const params = new URLSearchParams(
    global.window ? window.location.search : {}
  );
  return new Proxy(params, {
    get(target, prop) {
      return target.get(prop);
    },
  });
}

function Login({ providers, ...props }) {
  const classes = useStyles(props);
  const [session] = useSession();
  useEffect(() => {
    if (session) {
      Router.push("/explore");
    }
  }, [session]);

  const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL;

    const scope = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" ");

    const params = {
      response_type: "code",
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      redirect_uri: `${process.env.NEXT_PUBLIC_TWOOPSTRACKER_AUTH_URL}/login/google/`,
      prompt: "select_account",
      access_type: "offline",
      scope,
      state: process.env.NEXT_PUBLIC_REDIRECT_URL,
    };
    const urlParams = new URLSearchParams(params).toString();

    window.location = `${googleAuthUrl}?${urlParams}`;
  }, []);

  const token = useQueryParams();
  if (token.access_token && token.refresh_token) {
    saveToken(token.access_token, token.refresh_token);
    Router.push("/explore");
  }
  return (
    <Grid
      container
      justify="space-around"
      alignitems="center"
      className={classes.root}
    >
      <Grid item xs={12} className={classes.item}>
        <form noValidate className={classes.formStyles}>
          <div className={classes.buttonContainer}>
            <Button
              value="Subscribe"
              name="submit"
              id="signin"
              variant="contained"
              className={classes.loginButton}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openGoogleLoginPage}
            >
              Sign in with Google
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {
  providers: PropTypes.arrayOf(PropTypes.shape({})),
};

Login.defaultProps = {
  providers: undefined,
};

export default Login;
