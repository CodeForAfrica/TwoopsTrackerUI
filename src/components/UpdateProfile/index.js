import { Button, Typography, TextField } from "@material-ui/core";
import { useSession } from "next-auth/react";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function Update({
  title,
  firstName,
  lastName,
  changePasswordLabel,
  changePasswordLink,
  updateLabel,
  ...props
}) {
  const classes = useStyles(props);
  const { data: session } = useSession();

  const [form, setForm] = useState({
    firstName: session.user.firstName,
    lastName: session.user.lastName,
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
        </div>
      </div>
    </Section>
  );
}

Update.propTypes = {
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  changePasswordLabel: PropTypes.string,
  changePasswordLink: PropTypes.string,
  updateLabel: PropTypes.string,
};

Update.defaultProps = {
  title: undefined,
  firstName: undefined,
  lastName: undefined,
  changePasswordLabel: undefined,
  changePasswordLink: undefined,
  updateLabel: undefined,
};

export default Update;
