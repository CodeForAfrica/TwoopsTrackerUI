import { Button, Typography, TextField } from "@material-ui/core";
import { useSession } from "next-auth/react";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function ForgotPassword({
  title,
  description,
  emailLabel,
  submitLabel,
  ...props
}) {
  const classes = useStyles(props);
  const { data: session } = useSession();

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
      await fetchJson("/api/user/profile", session, {
        method: "PATCH",
        body: JSON.stringify(form),
      });
      Router.push("/account/settings ");
    } catch (e) {
      // do nothing
    }
  };

  return (
    <Section className={classes.section}>
      <div container>
        <div className={classes.container}>
          <Typography variant="h2">{title}</Typography>
          <form className={classes.form}>
            <TextField
              className={classes.textfield}
              InputLabelProps={{ shrink: false, className: classes.label }}
              InputProps={{ className: classes.input }}
              autoComplete="email"
              name="email"
              variant="outlined"
              fullWidth
              id="email"
              label={emailLabel}
              autoFocus
              value={form.email}
              onChange={formChanged}
            />
          </form>
          <div>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {submitLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

ForgotPassword.propTypes = {
  description: PropTypes.string,
  emailLabel: PropTypes.string,
  title: PropTypes.string,
  submitLabel: PropTypes.string,
};

ForgotPassword.defaultProps = {
  title: undefined,
  description: undefined,
  emailLabel: undefined,
  submitLabel: undefined,
};

export default ForgotPassword;
