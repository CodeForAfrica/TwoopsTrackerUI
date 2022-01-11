import {
  Button,
  Typography,
  Grid,
  TextField,
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
  description,
  password1Label,
  password2Label,
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
      await fetchJson("/api/update-password", session, {
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
                  name="newPassword1"
                  variant="outlined"
                  fullWidth
                  id="password1"
                  label={password1Label}
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
                  name="password2"
                  variant="outlined"
                  fullWidth
                  id="password2"
                  label={password2Label}
                  value={form.lastName}
                  autoFocus
                  onChange={formChanged}
                />
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
  description: PropTypes.string,
  errorLabel: PropTypes.string,
  password1Label: PropTypes.string,
  password2Label: PropTypes.string,
  successLabel: PropTypes.string,
  title: PropTypes.string,
  updateLabel: PropTypes.string,
};

Update.defaultProps = {
  title: undefined,
  description: PropTypes.string,
  successLabel: undefined,
  errorLabel: undefined,
  password1Label: PropTypes.string,
  password2Label: PropTypes.string,
  updateLabel: undefined,
};

export default Update;
