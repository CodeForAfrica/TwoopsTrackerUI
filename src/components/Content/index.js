import { RichTypography, A } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Image from "@/twoopstracker/components/Image";
import Section from "@/twoopstracker/components/Section";

function Content({ items, size, ctaLabel, ...props }) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <Section>
      <Grid container justifyContent="space-between" className={classes.root}>
        {items.map(({ title, description, image, href }) => (
          <Grid
            className={classes.row}
            container
            alignItems="stretch"
            spacing={4}
            item
            lg={12}
            key={title}
          >
            <Grid item xs={12} md={size === "large" ? 6 : 3}>
              <A
                className={clsx({
                  [classes.imageContainer]: true,
                  [classes.shadow]: size === "large",
                })}
                href={href}
              >
                <Image
                  objectFit="contain"
                  width={size === "large" ? 768 : 300}
                  height={size === "large" ? 500 : 150}
                  src={image}
                  alt={title}
                />
              </A>
            </Grid>
            <Grid
              alignItems="center"
              item
              xs={12}
              md={size === "large" ? 6 : 9}
            >
              {title && (
                <A className={classes.link} href={href}>
                  <Typography className={classes.title} variant="h2">
                    {title}
                  </Typography>
                </A>
              )}
              {description && (
                <RichTypography className={classes.description} variant="body2">
                  {description}
                </RichTypography>
              )}
              {size === "large" && (
                <A
                  underline="always"
                  className={classes.viewWebsite}
                  href={href}
                >
                  <Typography variant="body2">{ctaLabel}</Typography>
                </A>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

Content.propTypes = {
  ctaLabel: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  size: PropTypes.string,
};
Content.defaultProps = {
  items: undefined,
  size: undefined,
  ctaLabel: undefined,
};
export default Content;
