import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
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

function VerifyEmail({ description, ...props }) {
  const classes = useStyles();

  return (
    <Page {...props}>
      <Section className={classes.section}>
        <Typography variant="h4">{description}</Typography>
      </Section>
    </Page>
  );
}

VerifyEmail.propTypes = {
  description: PropTypes.string,
};

VerifyEmail.defaultProps = {
  description: undefined,
};

export async function getServerSideProps(context) {
  const q = context?.query?.q;
  const { category } = verifyEmail();
  const { title, description } = category[q] || {};

  if (!description) {
    return {
      props: {
        ...settings(),
        notFound: true,
      },
    };
  }

  return {
    props: {
      ...settings(),
      title: title ?? null,
      description: description ?? null,
    },
  };
}

export default VerifyEmail;
