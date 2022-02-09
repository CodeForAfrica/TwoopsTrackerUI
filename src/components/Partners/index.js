import { Typography, Grid, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import Image from "@/twoopstracker/components/Image";
import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    marginTop: typography.pxToRem(50),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(75),
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
  secondaryPartners: {
    borderTop: "1px solid #CBCBCB33",
    paddingTop: typography.pxToRem(60),
  },
  title: {
    textAlign: "center",
  },
  images: {
    marginTop: typography.pxToRem(30),
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(60),
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
      marginBottom: typography.pxToRem(90),
    },
  },
  description: {
    marginTop: typography.pxToRem(30),
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    maxWidth: typography.pxToRem(1194),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(60),
    },
  },
  primaryPartnerContainer: {
    marginBottom: typography.pxToRem(40),
  },
}));

// eslint-disable-next-line react/function-component-definition
function Partners({
  description,
  primaryPartners,
  secondaryPartners,
  title,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.primaryPartnerContainer}>
          <Typography
            color="textPrimary"
            variant="h1"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography className={classes.description} variant="body1">
            {description}
          </Typography>
          <div className={classes.images}>
            {primaryPartners?.map(({ image, href }) => (
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
        <div className={classes.secondaryPartners}>
          <Grid container>
            {secondaryPartners?.map(({ image, href }) => (
              <Grid item md={3} sm={6} xs={12}>
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
        </div>
      </Section>
    </div>
  );
}

Partners.propTypes = {
  description: PropTypes.string,
  primaryPartners: PropTypes.arrayOf(PropTypes.shape({})),
  secondaryPartners: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};
Partners.defaultProps = {
  description: undefined,
  primaryPartners: undefined,
  secondaryPartners: undefined,
  title: undefined,
};
export default Partners;
