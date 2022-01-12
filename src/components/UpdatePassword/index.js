import { Button, Typography, TextField } from "@material-ui/core";
import { useSession, signOut } from "next-auth/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

function Update({
  title,
  description,
  password1Label,
  password2Label,
  updateLabel,
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
      await fetchJson("/api/user/password", session, {
        method: "PATCH",
        body: JSON.stringify(form),
      });
      signOut();
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
              name="newPassword1"
              variant="outlined"
              fullWidth
              id="password1"
              label={password1Label}
              autoFocus
              value={form.firstName}
              onChange={formChanged}
            />
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
  description: PropTypes.string,
  password1Label: PropTypes.string,
  password2Label: PropTypes.string,
  title: PropTypes.string,
  updateLabel: PropTypes.string,
};

Update.defaultProps = {
  title: undefined,
  description: PropTypes.string,
  password1Label: PropTypes.string,
  password2Label: PropTypes.string,
  updateLabel: undefined,
};

export default Update;
