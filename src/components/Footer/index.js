/* eslint-disable react/default-props-match-prop-types */

import {
  StayInTouch,
  QuickLinks,
  RichTypography,
  LogoButton,
} from "@commons-ui/core";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

function Footer({
  project,
  copyrightProps,
  quickLinks: quickLinksProp,
  contacts,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section
        classes={{
          root: classes.section,
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={4}>
            {project.logoProps && (
              <LogoButton
                {...project.logoProps}
                component={Link}
                classes={{
                  root: classes.logoButton,
                }}
              />
            )}
            {project.description && (
              <RichTypography
                variant="overline"
                className={classes.description}
              >
                {project.description}
              </RichTypography>
            )}
            {contacts && (
              <StayInTouch
                title={contacts?.title}
                socialMedia={contacts?.socialMedia}
                classes={{
                  root: classes.stayInTouch,
                  icon: classes.stayInTouchIcon,
                  link: classes.stayInTouchLink,
                  links: classes.stayInTouchLinks,
                  text: classes.stayInTouchText,
                  title: classes.stayInTouchTitle,
                }}
              />
            )}
          </Grid>
          <Grid
            container
            classes={{
              root: classes.allLinks,
            }}
            item
            xs={12}
            md={4}
          >
            {quickLinksProp?.map((qL) => (
              <Grid key={qL.title} container item xs={12} md={6}>
                <QuickLinks
                  linkComponent={Link}
                  {...qL}
                  classes={{
                    root: classes.quickLinkRoot,
                    list: classes.quickList,
                    link: classes.quickLink,
                    title: classes.quickLinksTitle,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

Footer.propTypes = {
  contacts: PropTypes.shape({
    socialMedia: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
  }),
  project: PropTypes.shape({
    description: PropTypes.string,
    logoProps: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      href: PropTypes.string,
    }),
  }),
  quickLinks: PropTypes.arrayOf(PropTypes.shape({})),
  copyrightProps: PropTypes.shape({}),
};

Footer.defaultProps = {
  contacts: undefined,
  project: undefined,
  quickLinks: undefined,
  copyrightProps: undefined,
};

export default Footer;
