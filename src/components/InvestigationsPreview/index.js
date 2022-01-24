import { Typography, Button, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ breakpoints, typography, palette }) => ({
  root: {
    background: palette.background.secondary,
  },
  button: {
    marginTop: typography.pxToRem(60),
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(80),
    },
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: typography.pxToRem(75),
    paddingBottom: typography.pxToRem(75),
    [breakpoints.up("lg")]: {
      paddingTop: typography.pxToRem(112),
      paddingBottom: typography.pxToRem(112),
    },
  },
  image: {
    "& span": {
      boxShadow: `0 4px 8px 0 rgba(0,0,0,0.4)`,
    },
  },
  description: {
    marginTop: typography.pxToRem(39),
    marginBottom: typography.pxToRem(80),
    color: palette.text.secondary,
    fontWeight: 400,
    maxWidth: "90%",
  },
  investigationtitle: {
    color: palette.text.secondary,
    fontWeight: "bold",
  },
}));

function InvestigationsPreview({
  items,
  title,
  description,
  buttonText,
  buttonLink,
  ...props
}) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Typography variant="h1">{title}</Typography>
        <Typography
          align="center"
          className={classes.description}
          variant="subtitle1"
        >
          {description}
        </Typography>
        <Grid container spacing={8}>
          {items.slice(0, 3).map(({ href, image, title: bookTitle }) => (
            <Grid item xs={6} md={4}>
              <Link href={href}>
                <div className={classes.image}>
                  <Image
                    height={369}
                    width={297}
                    objectFit="contain"
                    src={image}
                    alt={bookTitle}
                  />
                </div>
                <Typography
                  className={classes.investigationtitle}
                  variant="body1"
                >
                  {bookTitle}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Button
          href={buttonLink}
          variant="contained"
          color="primary"
          className={classes.button}
          underline="none"
        >
          {buttonText}
        </Button>
      </Section>
    </div>
  );
}

InvestigationsPreview.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.string,
  title: PropTypes.string,
};
InvestigationsPreview.defaultProps = {
  buttonLink: undefined,
  buttonText: undefined,
  description: undefined,
  items: undefined,
  title: undefined,
};
export default InvestigationsPreview;
