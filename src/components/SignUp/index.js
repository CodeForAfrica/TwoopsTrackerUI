import { Typography, Button, Grid, makeStyles } from "@material-ui/core";
import { useSession } from "next-auth/client";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    marginTop: typography.pxToRem(142.5),

    marginBottom: typography.pxToRem(81.5),
  },
  section: {},
  description: {
    marginTop: typography.pxToRem(62),
    marginBottom: typography.pxToRem(52),
  },
  title: {
    color: palette.text.primary,
  },
}));

function SignUp({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  ...props
}) {
  const classes = useStyles(props);
  const [session] = useSession();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Image height={376} width={870} src={image} alt={title} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography className={classes.title} variant="h1">
              {title}
            </Typography>
            <Typography className={classes.description} variant="body1">
              {description}
            </Typography>
            {!session ? (
              <Button href={buttonLink} variant="contained" color="primary">
                {buttonText}
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

SignUp.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
SignUp.defaultProps = {
  buttonLink: undefined,
  buttonText: undefined,
  description: undefined,
  image: undefined,
  title: undefined,
};
export default SignUp;
