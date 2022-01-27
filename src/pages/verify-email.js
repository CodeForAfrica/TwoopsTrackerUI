import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import Section from "@/twoopstracker/components/Section";
import { settings, verifyEmail } from "@/twoopstracker/lib/cms";

const useStyles = makeStyles(({ typography }) => ({
  section: {
    marginBottom: typography.pxToRem(100),
    marginTop: typography.pxToRem(100),
    textAlign: "center",
  },
}));

function VerifyEmail({ category, ...props }) {
  const classes = useStyles();

  const {
    query: { q },
  } = useRouter();

  const content = category[q];
  if (!content) {
    return null;
  }
  return (
    <Page {...props} title={content?.title}>
      <Section className={classes.section}>
        <Typography variant="h4">{content?.description}</Typography>
      </Section>
    </Page>
  );
}

VerifyEmail.propTypes = {
  category: PropTypes.shape({
    register: PropTypes.shape({
      description: PropTypes.string,
    }),
    resetPassword: PropTypes.shape({}),
  }),
};

VerifyEmail.defaultProps = {
  category: undefined,
};

export async function getStaticProps() {
  return {
    props: {
      ...settings(),
      ...verifyEmail(),
    },
  };
}

export default VerifyEmail;
