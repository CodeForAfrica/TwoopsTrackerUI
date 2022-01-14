import {
  Button,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import * as yup from "yup";

import useStyles from "./useStyles";

import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

function Login({
  providers: providersProp,
  title,
  description,
  passwordPrompt,
  signupPrompt,
  signUpLink,
  signUpText,
  googleIcon,
  passwordIcon,
  ...props
}) {
  const classes = useStyles(props);
  const { data: session } = useSession();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const [isPassword, setIsPassword] = useState(true);

  const togglePasswordType = () => {
    setIsPassword(!isPassword);
  };

  const handleSubmit = async (values) => {
    try {
      await signIn("credentials", values);
      Router.push("/explore ");
    } catch (e) {
      // do nothing
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      type: "login",
    },
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

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
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              className={classes.textfield}
              InputLabelProps={{
                className: classes.label,
                shrink: false,
                required: false,
              }}
              InputProps={{
                className: classes.input,
              }}
              autoComplete="email"
              name="email"
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              autoFocus
              color="secondary"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              className={classes.textfield}
              InputLabelProps={{
                className: classes.label,
                shrink: false,
                required: false,
              }}
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
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </form>
          <div className={classes.buttonContainer}>
            {!session &&
              providers &&
              Object.values(providers).map((provider) => {
                if (provider.id === "google") {
                  return (
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
                  );
                }
                return null;
              })}
          </div>
          <Button classes={{ text: classes.passwordText }}>
            {passwordPrompt}
          </Button>
          <Typography className={classes.text}>
            {signupPrompt} <Link href={signUpLink}>{signUpText}</Link>
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
  passwordPrompt: PropTypes.string,
  signupPrompt: PropTypes.string,
  signUpText: PropTypes.string,
  signUpLink: PropTypes.string,
  googleIcon: PropTypes.string,
  passwordIcon: PropTypes.string,
};

Login.defaultProps = {
  providers: undefined,
  title: undefined,
  passwordPrompt: undefined,
  description: undefined,
  signupPrompt: undefined,
  signUpLink: undefined,
  signUpText: undefined,
  googleIcon: undefined,
  passwordIcon: undefined,
};

export default Login;
