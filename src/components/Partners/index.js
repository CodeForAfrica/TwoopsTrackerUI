import { Typography, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import codeForAll from "@/twoopstracker/assets/images/Artboard 1@2x 1.png";
import codeForAfrica from "@/twoopstracker/assets/images/CFA Editable Logo-01 1.png";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    marginTop: typography.pxToRem(107),

    marginBottom: typography.pxToRem(111),
  },
  section: {},
  description: {
    marginTop: typography.pxToRem(118),
  },
}));

function Partners({ images, title, description, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography className={classes.title} variant="h2">
              {title}
            </Typography>
            <Typography className={classes.description} variant="body1">
              {description}
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="flex-start"
            item
            xs={12}
            md={6}
          >
            {images.map((image) => (
              <Image
                height={170}
                width={450}
                objectFit="contain"
                src={image}
                alt={title}
              />
            ))}
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

Partners.propTypes = {
  description: PropTypes.string,
  images: PropTypes.string,
  title: PropTypes.string,
};
Partners.defaultProps = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  images: [codeForAll, codeForAfrica],
  title: "Partners & About Us",
};
export default Partners;
