import {
  Button,
  Typography,
  InputLabel,
  Input,
  FormControl,
} from "@material-ui/core";
import { useSession, signIn } from "next-auth/client";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";

function Login({ providers, ...props }) {
  const classes = useStyles(props);
  const [session] = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/explore");
    }
  }, [session]);

  return (
    <Section className={classes.section}>
      <div>
        <Typography variant="h2">Welcome back</Typography>
        <Typography className={classes.text}>
          Login to access all the features on TrollTracker
        </Typography>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" />
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" />
        </FormControl>
        <div>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
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
        <Typography className={classes.text}>Forgot password?</Typography>
        <Typography className={classes.text}>
          New to TrollTracker? Sign Up now
        </Typography>
      </div>
    </Section>
  );
}

Login.propTypes = {
  providers: PropTypes.shape({}),
};

Login.defaultProps = {
  providers: undefined,
};

export default Login;
