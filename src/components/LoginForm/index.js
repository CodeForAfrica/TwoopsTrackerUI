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
  },
  loginButton: {
    marginBottom: "1rem",
    width: "100%",
    color: "white",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    backgroundColor: theme.palette.secondary.dark,
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
  footerInput: {
    // Moved to `App.css` due to difficult of setting input `text-align` to `center`
  },
  buttonLink: {
    textDecoration: "none",
  },
  formStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControlStyles: {
    width: "400px",
    marginBottom: "10px",
    [theme.breakpoints.between("xs", "xs")]: {
      width: "95vw",
    },
  },
  inputLabel: {
    textAlign: "initial",
    color: "#FFFFFF",
    transform: "none",
    position: "static",
  },
  text: {
    color: "black",
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
      <Grid item xs={12}>
        <p className={classes.text}>HAPPAAA</p>
        <form noValidate className={classes.formStyles}>
          <div className={classes.buttonContainer}>
            {!session &&
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
  providers: PropTypes.arrayOf(PropTypes.shape({})),
};

Login.defaultProps = {
  providers: undefined,
};

export default Login;
