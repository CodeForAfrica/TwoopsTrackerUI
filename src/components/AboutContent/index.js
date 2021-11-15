import RichTypography from "@commons-ui/core/RichTypography";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Image from "@/twoopstracker/components/Image";
import Section from "@/twoopstracker/components/Section";

function AboutContent({ items, ...props }) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <Section>
      <Grid container justifyContent="space-between" className={classes.root}>
        {items.map(({ title, description, image }) => (
          <Grid
            className={classes.row}
            container
            alignItems="center"
            spacing={4}
            item
            lg={12}
            key={title}
          >
            <Grid item xs={12} md={3}>
              <Image
                objectFit="contain"
                height={225}
                width={225}
                src={image}
                alt={title}
              />
            </Grid>
            <Grid container alignItems="center" item xs={12} md={9}>
              {title && (
                <Typography className={classes.title} variant="h4">
                  {title}
                </Typography>
              )}
              {description && (
                <RichTypography className={classes.description} variant="body1">
                  {description}
                </RichTypography>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

AboutContent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};
AboutContent.defaultProps = {
  items: undefined,
};
export default AboutContent;
