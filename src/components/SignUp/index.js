import {
  Button,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  FormHelperText,
} from "@material-ui/core";
import { Formik } from "formik";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";
import * as yup from "yup";

import useStyles from "./useStyles";

import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

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

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password1: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    firstName: yup
      .string("Enter your First Name")
      .required("First Name is required"),
    lastName: yup
      .string("Enter your Last Name")
      .required("Last Name is required"),
  });

  const [isPassword, setIsPassword] = useState(true);

  const togglePasswordType = () => {
    setIsPassword(!isPassword);
  };

  const handleSubmit = async (values, { setErrors, setStatus }) => {
    const result = await fetchJson("/api/auth/register", null, {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (result?.success) {
      Router.push("/verify-email?q=register");
    } else if (result?.data) {
      if ("non_field_errors" in result.data) {
        setStatus(result.data.non_field_errors);
      } else {
        setErrors(result.data);
      }
    }
  };

  const initialValues = {
    email: "",
    password1: "",
    firstName: "",
    lastName: "",
  };

  const providers = Object.values(providersProp ?? {});

  return (
    <Section className={classes.section}>
      <Grid container>
        <Grid item xs={12} md={7} className={classes.container}>
          <Typography variant="h2">{title}</Typography>
          <Typography className={classes.text}>{description}</Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              handleSubmit: handleSubmitProp,
              handleChange,
              touched,
              status,
            }) => (
              <form className={classes.form} onSubmit={handleSubmitProp}>
                {status?.length && (
                  <FormHelperText
                    component="div"
                    error
                    classes={{ root: classes.textfield }}
                  >
                    <Typography variant="caption">{status}</Typography>
                  </FormHelperText>
                )}
                <TextField
                  className={classes.textfield}
                  InputLabelProps={{
                    className: classes.label,
                    shrink: false,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  autoComplete="firstName"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  color="secondary"
                  onChange={handleChange}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
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
                  autoComplete="lastName"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                  color="secondary"
                  onChange={handleChange}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
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
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  color="secondary"
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  className={classes.textfield}
                  InputLabelProps={{ className: classes.label, shrink: false }}
                  InputProps={{
                    className: classes.input,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          className={classes.passwordButton}
                          onClick={() => togglePasswordType()}
                        >
                          <Image
                            height={45}
                            width={45}
                            src={passwordIcon}
                            alt=""
                          />
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password1"
                  label="Password"
                  type={isPassword ? "password" : "text"}
                  id="password1"
                  autoComplete="current-password"
                  color="secondary"
                  onChange={handleChange}
                  error={touched.password1 && Boolean(errors.password1)}
                  helperText={touched.password1 && errors.password1}
                />
                <Button
                  type="submit"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  SignUp
                </Button>
              </form>
            )}
          </Formik>
          <div className={classes.buttonContainer}>
            {providers &&
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
