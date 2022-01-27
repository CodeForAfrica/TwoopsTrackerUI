import {
  Button,
  IconButton,
  Typography,
  Grid,
  TextField,
  FormHelperText,
  InputAdornment,
} from "@material-ui/core";
import { Formik } from "formik";
import Image from "next/image";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";
import * as yup from "yup";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function ResetPassword({
  title,
  description,
  uid,
  token,
  passwordIcon,
  ...props
}) {
  const classes = useStyles(props);
  const [isPassword, setIsPassword] = useState(true);

  const togglePasswordType = () => {
    setIsPassword(!isPassword);
  };

  const validationSchema = yup.object({
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setStatus }) => {
    const result = await fetchJson("/api/auth/reset-password/confirm", null, {
      method: "POST",
      body: JSON.stringify({
        uid,
        token,
        ...values,
      }),
    });

    if (result?.success) {
      Router.push("/login");
    } else if (result?.data) {
      const field = Object.keys(result.data)[0];
      setStatus(`${field}: ${result.data[field][0]}`);
    }
  };

  const initialValues = {
    password: "",
  };

  if (!(uid && token)) {
    return null;
  }

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
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          className={classes.passwordButton}
                          onClick={() => togglePasswordType()}
                        >
                          <Image
                            height={45}
                            width={45}
                            src={passwordIcon}
                            alt=""
                          />
                        </IconButton>
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
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
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

ResetPassword.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  uid: PropTypes.string,
  token: PropTypes.string,
  passwordIcon: PropTypes.string,
};

ResetPassword.defaultProps = {
  title: undefined,
  description: undefined,
  uid: undefined,
  token: undefined,
  passwordIcon: undefined,
};

export default ResetPassword;
