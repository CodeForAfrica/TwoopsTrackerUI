import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSession, signIn } from "next-auth/client";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

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
    [theme.breakpoints.up("xl")]: {
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

function Login({ providers, ...props }) {
  const classes = useStyles(props);
  const [session] = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/explore");
    }
  }, [session]);

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
            {!session &&
              providers &&
              Object.values(providers).map((provider) => (
                <Button
                  key={provider.name}
                  value="Subscribe"
                  name="submit"
                  id="mc-embedded-subscribe-form"
                  variant="contained"
                  className={classes.loginButton}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: `${window.location.origin}/explore`,
                    })
                  }
                >
                  Sign in with {provider.name}
                </Button>
              ))}
          </div>
        </form>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {
  providers: PropTypes.shape({}),
};

Login.defaultProps = {
  providers: undefined,
};

export default Login;
