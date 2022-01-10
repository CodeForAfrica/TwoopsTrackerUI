import { Button, Typography, Grid, TextField } from "@material-ui/core";
import { useSession, signIn } from "next-auth/client";
import Image from "next/image";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import useStyles from "./useStyles";

import GoogleIcon from "@/twoopstracker/assets/icons/GoogleIcon.svg";
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
      <Grid container>
        <Grid item xs={7} className={classes.container}>
          <Typography variant="h2">Welcome back</Typography>
          <Typography className={classes.text}>
            Login to access all the features on TrollTracker
          </Typography>
          <form className={classes.form}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  className={classes.textfield}
                  InputLabelProps={{ className: classes.label }}
                  InputProps={{ className: classes.input }}
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  // required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textfield}
                  InputLabelProps={{ className: classes.label }}
                  InputProps={{ className: classes.input }}
                  variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
          </form>
          {/* <FormControl>
          <InputLabel className={classes.label} htmlFor="email">
            Email address
          </InputLabel>
          <Input id="email" />
          <InputLabel className={classes.label} htmlFor="password">
            Password
          </InputLabel>
          <Input id="password" />
        </FormControl> */}
          <div>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
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
                  <Image height={45} width={45} src={GoogleIcon} alt="" />
                  Sign in with {provider.name}
                </Button>
              ))}
          </div>
          <Typography className={classes.text}>Forgot password?</Typography>
          <Typography className={classes.text}>
            New to TrollTracker? Sign Up now
          </Typography>
        </Grid>
      </Grid>
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
