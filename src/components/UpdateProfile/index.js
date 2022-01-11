import {
  Button,
  Typography,
  Grid,
  TextField,
  Link,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useSession } from "next-auth/react";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Update({
  title,
  firstName,
  lastName,
  changePasswordLabel,
  changePasswordLink,
  updateLabel,
  successLabel,
  errorLabel,
  ...props
}) {
  const classes = useStyles(props);
  const { data: session } = useSession();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };
  useEffect(() => {
    if (!session) {
      Router.push("/login");
    }
  }, [session]);
  const [form, setForm] = useState({
    firstName: session.user.first_name,
    lastName: session.user.last_name,
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
      await fetchJson("/api/update-profile", session, {
        method: "PATCH",
        body: JSON.stringify(form),
      });
      setOpenSnackBar(true);
      setMessage({ status: "success", text: successLabel });
    } catch (e) {
      setOpenSnackBar(true);
      setMessage({ status: "error", text: errorLabel });
    }
  };

  return (
    <Section className={classes.section}>
      <Grid container>
        <Grid item xs={7} className={classes.container}>
          <Typography variant="h2">{title}</Typography>
          <form className={classes.form}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  className={classes.textfield}
                  InputLabelProps={{ shrink: false, className: classes.label }}
                  InputProps={{ className: classes.input }}
                  autoComplete="firstName"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label={firstName}
                  autoFocus
                  value={form.firstName}
                  onChange={formChanged}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.textfield}
                  InputLabelProps={{ shrink: false, className: classes.label }}
                  InputProps={{ className: classes.input }}
                  autoComplete="lastName"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label={lastName}
                  value={form.lastName}
                  autoFocus
                  onChange={formChanged}
                />
              </Grid>
              <Grid item xs={12}>
                <Link className={classes.link} href={changePasswordLink}>
                  {changePasswordLabel}
                </Link>
              </Grid>
            </Grid>
          </form>
          <div>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {updateLabel}
            </Button>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity={message.status}>
          {message.text}
        </Alert>
      </Snackbar>
    </Section>
  );
}

Update.propTypes = {
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  successLabel: PropTypes.string,
  errorLabel: PropTypes.string,
  changePasswordLabel: PropTypes.string,
  changePasswordLink: PropTypes.string,
  updateLabel: PropTypes.string,
};

Update.defaultProps = {
  title: undefined,
  firstName: undefined,
  lastName: undefined,
  successLabel: undefined,
  errorLabel: undefined,
  changePasswordLabel: undefined,
  changePasswordLink: undefined,
  updateLabel: undefined,
};

export default Update;
