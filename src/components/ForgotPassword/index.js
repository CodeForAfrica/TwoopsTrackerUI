import {
  Button,
  Typography,
  Grid,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { Formik } from "formik";
import Router from "next/router";
import PropTypes from "prop-types";
import React from "react";
import * as yup from "yup";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function ForgotPassword({ title, description, ...props }) {
  const classes = useStyles(props);
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const handleSubmit = async (values, { setErrors }) => {
    const result = await fetchJson("/api/auth/reset-password", null, {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (result?.success) {
      Router.push("/verify-email?q=reset");
    } else {
      setErrors(result?.data);
    }
  };

  const initialValues = {
    email: "",
  };

  return (
    <Section className={classes.section}>
      <Grid container>
        <Grid item xs={12} md={7} className={classes.container}>
          <Typography variant="h2">{title}</Typography>
          <Typography className={classes.text}>{description}</Typography>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
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
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Section>
  );
}

ForgotPassword.propTypes = {
  providers: PropTypes.shape({}),
  title: PropTypes.string,
  description: PropTypes.string,
  forgotPasswordLink: PropTypes.string,
  forgotPasswordPrompt: PropTypes.string,
  signupPrompt: PropTypes.string,
  signUpText: PropTypes.string,
  signUpLink: PropTypes.string,
  googleIcon: PropTypes.string,
  passwordIcon: PropTypes.string,
};

ForgotPassword.defaultProps = {
  providers: undefined,
  title: undefined,
  forgotPasswordPrompt: undefined,
  description: undefined,
  forgotPasswordLink: undefined,
  signupPrompt: undefined,
  signUpLink: undefined,
  signUpText: undefined,
  googleIcon: undefined,
  passwordIcon: undefined,
};

export default ForgotPassword;
