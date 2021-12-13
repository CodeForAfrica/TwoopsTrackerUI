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
      marginTop: typography.pxToRem(20),
    },
  },
}));

function Partners({ description, items, secondaryPartners, title, ...props }) {
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
            {items?.map(({ image, href }) => (
              <Link key={image} href={href} className={classes.imageLink}>
                <Image
                  className={classes.image}
                  height={174}
                  width={305}
                  objectFit="contain"
                  src={image}
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
            {secondaryPartners?.map(({ image, href }) => (
              <Grid item lg={3} md={6} xs={12}>
                <Link key={href} href={href}>
                  <Image
                    className={classes.image}
                    height={170}
                    width={300}
                    objectFit="contain"
                    src={image}
                    alt={title}
                  />
                </Link>
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
  items: PropTypes.arrayOf(PropTypes.shape({})),
  secondaryPartners: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};
Partners.defaultProps = {
  description: undefined,
  items: undefined,
  secondaryPartners: undefined,
  title: undefined,
};
export default Partners;
