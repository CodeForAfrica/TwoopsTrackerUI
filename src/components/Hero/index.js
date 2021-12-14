import { RichTypography } from "@commons-ui/core";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useSession } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";

import backgroundImage from "@/twoopstracker/assets/images/banner background.png";
import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    backgroundImage: `url('${backgroundImage.src || backgroundImage}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    width: "100%",
  },
  button: {
    marginRight: typography.pxToRem(60),
    marginBottom: typography.pxToRem(8),
  },
  buttonContainer: {
    display: "flex",
    marginTop: typography.pxToRem(40),
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [breakpoints.up("xl")]: {
      marginTop: typography.pxToRem(90),
    },
  },
  title: {
    maxWidth: "80%",
    [breakpoints.up("xl")]: {
      width: typography.pxToRem(1077),
    },
  },
  description: {
    color: palette.text.secondary,
    marginTop: typography.pxToRem(40),
    [breakpoints.up("xl")]: {
      marginTop: typography.pxToRem(90),
    },
  },
  section: {
    paddingTop: typography.pxToRem(90),
    paddingBottom: typography.pxToRem(90),
    [breakpoints.up("xl")]: {
      paddingTop: typography.pxToRem(117),
      paddingBottom: typography.pxToRem(127),
    },
  },
}));

function Hero({ ctas, description, title, withCTA, ...props }) {
  const classes = useStyles(props);
  const [session] = useSession();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Typography className={classes.title} variant="h1">
          {title}
        </Typography>
        <RichTypography className={classes.description} variant="subtitle1">
          {description}
        </RichTypography>
        {withCTA && (
          <div className={classes.buttonContainer}>
            {ctas.search ? (
              <Button
                component={Link}
                href={ctas.search.href}
                className={classes.button}
                variant="contained"
                color="primary"
                underline="none"
              >
                {ctas.search.label}
              </Button>
            ) : null}
            {!session && ctas.signUp ? (
              <Button
                component={Link}
                href={ctas.signUp.href}
                className={classes.button}
                variant="contained"
                color="primary"
                underline="none"
              >
                {ctas.signUp.label}
              </Button>
            ) : null}
          </div>
        )}
      </Section>
    </div>
  );
}

Hero.propTypes = {
  ctas: PropTypes.shape({
    search: PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
    signUp: PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  }),
  description: PropTypes.string,
  title: PropTypes.string,
  withCTA: PropTypes.string,
};

Hero.defaultProps = {
  ctas: undefined,
  description: undefined,
  title: undefined,
  withCTA: true,
};

export default Hero;
