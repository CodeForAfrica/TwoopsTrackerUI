import { Typography, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    marginTop: typography.pxToRem(50),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(107),
    },
  },
  image: {
    width: "100%",
    filter: "grayscale(1)",
    [breakpoints.up("md")]: {
      width: "unset",
    },
  },
  imageContainer: {
    justifyContent: "center",
    marginTop: typography.pxToRem(30),
    [breakpoints.up("md")]: {
      marginTop: "unset",
    },
  },
  logos: {
    backgroundColor: "#CBCBCB33",
    padding: `${typography.pxToRem(100)} 0`,
  },
  title: {
    textAlign: "center",
  },
  images: {
    marginTop: typography.pxToRem(100),
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  },
  imageLink: {
    padding: `${typography.pxToRem(25)} ${typography.pxToRem(40)}`,
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(50)} ${typography.pxToRem(80)}`,
    },
    "&:hover": {
      boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`,
      "& img": {
        filter: "none",
      },
    },
  },
  section: {
    marginBottom: typography.pxToRem(60),
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(111),
    },
  },
  description: {
    marginTop: typography.pxToRem(50),
    textAlign: "center",
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(118),
    },
  },
}));

function Partners({
  primaryPartners,
  secondaryPartners,
  title,
  description,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
          <Typography className={classes.description} variant="body2">
            {description}
          </Typography>
          <div className={classes.images}>
            {primaryPartners.map((image) => (
              <Link
                key={image.href}
                href={image.href}
                className={classes.imageLink}
              >
                <Image
                  className={classes.image}
                  height={300}
                  objectFit="contain"
                  src={image.src}
                  alt={title}
                />
              </Link>
            ))}
          </div>
        </div>
      </Section>
      <div className={classes.logos}>
        <Section>
          <Grid container>
            {secondaryPartners.map((logo) => (
              <Grid item lg={3} md={6} xs={12}>
                <Image
                  className={classes.image}
                  height={170}
                  width={300}
                  objectFit="contain"
                  src={logo}
                  alt={title}
                />
              </Grid>
            ))}
          </Grid>
        </Section>
      </div>
    </div>
  );
}

Partners.propTypes = {
  description: PropTypes.string,
  primaryPartners: PropTypes.string,
  secondaryPartners: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};
Partners.defaultProps = {
  description: undefined,
  primaryPartners: undefined,
  secondaryPartners: undefined,
  title: undefined,
};
export default Partners;
