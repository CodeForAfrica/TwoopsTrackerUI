import {
  Button,
  Typography,
  Grid,
  TextField,
  FormHelperText,
} from "@mui/material";
import { Formik } from "formik";
import { getSession, useSession } from "next-auth/react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import * as yup from "yup";

import useStyles from "./useStyles";

import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function UpdateProfile({
  title,
  firstNameLabel,
  lastNameLabel,
  changePasswordLabel,
  changePasswordLink,
  successLabel,
  errorLabel,
  buttonLabel,
  ...props
}) {
  const classes = useStyles(props);
  const { data: session } = useSession();
  const { email, firstName, lastName } = session.user;
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (values, { setStatus }) => {
    const result = await fetchJson("/api/user/profile", null, {
      method: "PATCH",
      body: JSON.stringify(values),
    });

    if (result && result.pk) {
      setStatus(successLabel);
      setIsError(false);
      await getSession(); // to update session right away
      setTimeout(() => {
        setStatus("");
      }, 4000);
    } else {
      setStatus(errorLabel);
      setIsError(true);
    }
  };

  const initialValues = {
    email,
    firstName,
    lastName,
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    firstName: yup.string("Enter your First Name"),
    lastName: yup.string("Enter your Last Name"),
  });

  return (
    <Section className={classes.section}>
      <Grid container>
        <Grid item xs={12} md={7} className={classes.container}>
          <Typography variant="h2">{title}</Typography>
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
              values,
            }) => (
              <form className={classes.form} onSubmit={handleSubmitProp}>
                {status?.length > 0 && (
                  <FormHelperText
                    component="div"
                    error={isError}
                    classes={{ root: classes.status }}
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
                  value={values.firstName}
                  fullWidth
                  id="firstName"
                  label={firstNameLabel}
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
                  label={lastNameLabel}
                  value={values.lastName}
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
                  value={values.email}
                  id="email"
                  label="Email"
                  disabled
                  color="secondary"
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Button type="submit" variant="contained" color="primary">
                  {buttonLabel}
                </Button>
              </form>
            )}
          </Formik>
          {session?.accountType === "credentials" && (
            <Typography className={classes.text}>
              <Link href={changePasswordLink}>{changePasswordLabel}</Link>
            </Typography>
          )}
        </Grid>
      </Grid>
    </Section>
  );
}

UpdateProfile.propTypes = {
  title: PropTypes.string,
  firstNameLabel: PropTypes.string,
  lastNameLabel: PropTypes.string,
  changePasswordLabel: PropTypes.string,
  changePasswordLink: PropTypes.string,
  successLabel: PropTypes.string,
  errorLabel: PropTypes.string,
  buttonLabel: PropTypes.string,
};

UpdateProfile.defaultProps = {
  title: undefined,
  firstNameLabel: undefined,
  lastNameLabel: undefined,
  changePasswordLabel: undefined,
  changePasswordLink: undefined,
  successLabel: undefined,
  errorLabel: undefined,
  buttonLabel: undefined,
};

export default UpdateProfile;
