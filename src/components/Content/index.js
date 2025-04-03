import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@mui/material";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Image from "@/twoopstracker/components/Image";
import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

function Content({ items, size, ctaLabel, ...props }) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <Section>
      <Grid container justifyContent="space-between" className={classes.root}>
        {items.map(({ cta, description, href, image, title }) => (
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
              <Link
                className={clsx({
                  [classes.imageContainer]: true,
                  [classes.shadow]: size === "large",
                })}
                href={href}
              >
                <Image
                  objectFit="contain"
                  width={size === "large" ? 768 : 200}
                  height={size === "large" ? 500 : 200}
                  src={image}
                  alt={title}
                />
              </Link>
            </Grid>
            <Grid
              container
              alignItems="center"
              item
              xs={12}
              md={size === "large" ? 6 : 9}
            >
              {title && (
                <Typography variant="h4" className={classes.title}>
                  <Link href={href} className={classes.link}>
                    {title}
                  </Link>
                </Typography>
              )}
              {description && (
                <RichTypography variant="body1" className={classes.description}>
                  {description}
                </RichTypography>
              )}
              {size === "large" && (
                <Typography>
                  <Link
                    href={href}
                    underline="always"
                    className={classes.viewWebsite}
                  >
                    {cta || ctaLabel}
                  </Link>
                </Typography>
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
