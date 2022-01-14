import {
  Button,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import useStyles from "./useStyles";

import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

function SignUp({
  providers: providersProp,
  title,
  description,
  loginPrompt,
  loginText,
  googleIcon,
  passwordIcon,
  ...props
}) {
  const classes = useStyles(props);
  const { data: session } = useSession();

  const [isPassword, setIsPassword] = useState(true);

  const togglePasswordType = () => {
    setIsPassword(!isPassword);
  };

  const [form, setForm] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    type: "registration",
  });

  const formChanged = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signIn("credentials", form);
      Router.push("/explore ");
    } catch (e) {
      // do nothing
    }
  };

  useEffect(() => {
    if (session) {
      Router.push("/explore");
    }
  }, [session]);

  const providers = Object.values(providersProp ?? {});
  if (!providers?.length) {
    return null;
  }
  return (
    <Section className={classes.section}>
      <Grid container>
        <Grid item xs={12} md={7} className={classes.container}>
          <Typography variant="h2">{title}</Typography>
          <Typography className={classes.text}>{description}</Typography>
          <form className={classes.form}>
            <TextField
              className={classes.textfield}
              InputLabelProps={{
                className: classes.label,
                shrink: false,
              }}
              InputProps={{
                className: classes.input,
              }}
              onChange={formChanged}
              autoComplete="firstName"
              name="firstName"
              variant="outlined"
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              color="secondary"
            />
            <TextField
              className={classes.textfield}
              InputLabelProps={{
                className: classes.label,
                shrink: false,
              }}
              InputProps={{
                className: classes.input,
              }}
              onChange={formChanged}
              autoComplete="lastName"
              name="lastName"
              variant="outlined"
              fullWidth
              id="lastName"
              label="Last Name"
              autoFocus
              color="secondary"
            />
            <TextField
              className={classes.textfield}
              InputLabelProps={{
                className: classes.label,
                shrink: false,
              }}
              InputProps={{
                className: classes.input,
              }}
              onChange={formChanged}
              autoComplete="email"
              name="email"
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              autoFocus
              color="secondary"
            />

            <TextField
              className={classes.textfield}
              InputLabelProps={{ className: classes.label, shrink: false }}
              onChange={formChanged}
              InputProps={{
                className: classes.input,
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      className={classes.passwordButton}
                      onClick={() => togglePasswordType()}
                    >
                      <Image height={45} width={45} src={passwordIcon} alt="" />
                    </Button>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type={isPassword ? "password" : "text"}
              id="password"
              autoComplete="current-password"
              color="secondary"
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              SignUp
            </Button>
          </form>
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
                  <Image height={45} width={45} src={googleIcon} alt="" />
                  <Typography className={classes.signinText}>
                    Sign in with {provider.name}
                  </Typography>
                </Button>
              ))}
          </div>
          <Typography className={classes.text}>
            {loginPrompt} <Link href="/login">{loginText}</Link>
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

SignUp.propTypes = {
  providers: PropTypes.shape({}),
  title: PropTypes.string,
  description: PropTypes.string,
  loginPrompt: PropTypes.string,
  loginText: PropTypes.string,
  loginLink: PropTypes.string,
  googleIcon: PropTypes.string,
  passwordIcon: PropTypes.string,
};

SignUp.defaultProps = {
  providers: undefined,
  title: undefined,
  description: undefined,
  loginPrompt: undefined,
  loginLink: undefined,
  loginText: undefined,
  googleIcon: undefined,
  passwordIcon: undefined,
};

export default SignUp;
