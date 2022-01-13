import {
  Button,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { useSession, signIn } from "next-auth/client";
import Image from "next/image";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import useStyles from "./useStyles";

import GoogleIcon from "@/twoopstracker/assets/icons/GoogleIcon.svg";
import ViewIcon from "@/twoopstracker/assets/icons/password.svg";
import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

function Login({
  providers,
  title,
  description,
  password,
  signupPrompt,
  signUpLink,
  href,
  googleIcon,
  passwordIcon,
  ...props
}) {
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
        <Grid item xs={12} md={7} className={classes.container}>
          <Typography variant="h2">{title}</Typography>
          <Typography className={classes.text}>{description}</Typography>
          <form className={classes.form}>
            <TextField
              className={classes.textfield}
              InputLabelProps={{ className: classes.label }}
              InputProps={{ className: classes.input }}
              autoComplete="email"
              name="email"
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              autoFocus
            />

            <TextField
              className={classes.textfield}
              InputLabelProps={{ className: classes.label }}
              InputProps={{
                className: classes.input,
                endAdornment: (
                  <InputAdornment position="end">
                    <Image height={45} width={45} src={ViewIcon} alt="" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </form>
          <div>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Login
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
          <Button classes={{ text: classes.passwordText }}>{password}</Button>
          <Typography className={classes.text}>
            {signupPrompt} <Link href={href}>{signUpLink}</Link>
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

Login.propTypes = {
  providers: PropTypes.shape({}),
  title: PropTypes.string,
  description: PropTypes.string,
  password: PropTypes.string,
  signupPrompt: PropTypes.string,
  href: PropTypes.string,
  signUpLink: PropTypes.string,
  googleIcon: PropTypes.string,
  passwordIcon: PropTypes.string,
};

Login.defaultProps = {
  providers: undefined,
  title: undefined,
  password: undefined,
  description: undefined,
  signupPrompt: undefined,
  href: undefined,
  signUpLink: undefined,
  googleIcon: undefined,
  passwordIcon: undefined,
};

export default Login;
