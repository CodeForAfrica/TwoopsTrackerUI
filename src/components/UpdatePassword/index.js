import {
  Button,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { Formik } from "formik";
import { signOut, useSession } from "next-auth/react";
import Image from "next/legacy/image";
import PropTypes from "prop-types";
import React, { useState } from "react";
import * as yup from "yup";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function UpdatePassword({
  title,
  description,
  oldPasswordLabel,
  newPasswordLabel,
  buttonLabel,
  passwordIcon,
  successLabel,
  errorLabel,
  ...props
}) {
  const classes = useStyles(props);
  const { data: session } = useSession();
  const [isError, setIsError] = useState(false);

  const [showPassword, setShowPassword] = useState({
    old: true,
    new: true,
  });

  const togglePasswordType = (e, t) => {
    e.preventDefault();

    setShowPassword({
      ...showPassword,
      [t]: !showPassword[t],
    });
  };

  const initialValues = {
    oldPassword: "",
    newPassword: "",
  };
  const validationSchema = yup.object().shape({
    oldPassword: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    newPassword: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setStatus }) => {
    const result = await fetchJson("/api/user/password", null, {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (result?.detail) {
      setStatus(successLabel);
      setIsError(false);
      setTimeout(() => {
        setStatus("");
      }, 4000);
      signOut({ callbackUrl: "/login" });
    } else {
      setStatus(errorLabel);
      setIsError(true);
    }
  };

  if (session?.accountType !== "credentials") {
    return null;
  }

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
                  InputLabelProps={{ className: classes.label, shrink: false }}
                  InputProps={{
                    className: classes.input,
                    endAdornment: passwordIcon && (
                      <InputAdornment position="end">
                        <Button
                          className={classes.passwordButton}
                          onClick={(e) => togglePasswordType(e, "old")}
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
                  name="oldPassword"
                  label={oldPasswordLabel}
                  type={showPassword.old ? "password" : "text"}
                  id="oldPassword"
                  color="secondary"
                  onChange={handleChange}
                  error={touched.oldPassword && Boolean(errors.oldPassword)}
                  helperText={touched.oldPassword && errors.oldPassword}
                />
                <TextField
                  className={classes.textfield}
                  InputLabelProps={{ className: classes.label, shrink: false }}
                  InputProps={{
                    className: classes.input,
                    endAdornment: passwordIcon && (
                      <InputAdornment position="end">
                        <Button
                          className={classes.passwordButton}
                          onClick={(e) => togglePasswordType(e, "new")}
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
                  name="newPassword"
                  label={newPasswordLabel}
                  type={showPassword.new ? "password" : "text"}
                  id="newPassword"
                  color="secondary"
                  onChange={handleChange}
                  error={touched.newPassword && Boolean(errors.newPassword)}
                  helperText={touched.newPassword && errors.newPassword}
                />
                <Button type="submit" variant="contained" color="primary">
                  {buttonLabel}
                </Button>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Section>
  );
}

UpdatePassword.propTypes = {
  description: PropTypes.string,
  oldPasswordLabel: PropTypes.string,
  newPasswordLabel: PropTypes.string,
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  passwordIcon: PropTypes.string,
  errorLabel: PropTypes.string,
  successLabel: PropTypes.string,
};

UpdatePassword.defaultProps = {
  title: undefined,
  description: PropTypes.string,
  oldPasswordLabel: PropTypes.string,
  newPasswordLabel: PropTypes.string,
  buttonLabel: undefined,
  passwordIcon: undefined,
  errorLabel: undefined,
  successLabel: undefined,
};

export default UpdatePassword;
