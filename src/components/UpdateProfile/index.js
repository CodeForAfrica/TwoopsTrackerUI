import { Button, Typography, Grid, TextField, Link } from "@material-ui/core";
import { useSession } from "next-auth/react";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";

function Update({
  title,
  firstName,
  lastName,
  email,
  changePasswordLabel,
  changePasswordLink,
  updateLabel,
  ...props
}) {
  const classes = useStyles(props);
  const [session] = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/explore");
    }
  }, [session]);

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
                  InputLabelProps={{ className: classes.label }}
                  InputProps={{ className: classes.input }}
                  autoComplete="firstName"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.textfield}
                  InputLabelProps={{ className: classes.label }}
                  InputProps={{ className: classes.input }}
                  autoComplete="lastName"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.textfield}
                  InputLabelProps={{ className: classes.label }}
                  InputProps={{ className: classes.input }}
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <Link className={classes.text} href={changePasswordLink}>
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
            >
              Edit
            </Button>
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}

Update.propTypes = {
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  changePasswordLabel: PropTypes.string,
  changePasswordLink: PropTypes.string,
  updateLabel: PropTypes.string,
};

Update.defaultProps = {
  title: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  changePasswordLabel: undefined,
  changePasswordLink: undefined,
  updateLabel: undefined,
};

export default Update;
