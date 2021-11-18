import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import Section from "@/twoopstracker/components/Section";
import Tabs from "@/twoopstracker/components/Tabs";
import UserSearch from "@/twoopstracker/components/UserSearch";
import { searches } from "@/twoopstracker/config";

const useStyles = makeStyles(({ typography }) => ({
  section: {
    marginBottom: typography.pxToRem(70),
    marginTop: typography.pxToRem(60),
  },
}));

function Account({ slug, ...props }) {
  const classes = useStyles(props);
  const tabItems = [
    {
      label: "List",
      slug: "list",
      href: "/account/lists",
      children: <div />,
    },
    {
      label: "Saved Search",
      slug: "saved-search",
      href: "/account/searches",
      children: <UserSearch items={searches} />,
    },
    {
      label: "Upload Data",
      slug: "data",
      href: "/account/data",
      children: <div />,
    },
    {
      label: "Your Account",
      slug: "settings",
      href: "/account/settings",
      children: <div />,
    },
  ];
  return (
    <Page {...props}>
      <Section classes={{ root: classes.section }}>
        <Tabs name="account" activeTab={slug} items={tabItems} />
      </Section>
    </Page>
  );
}

Account.propTypes = {
  slug: PropTypes.string,
  user: PropTypes.shape({}),
};

Account.defaultProps = {
  slug: undefined,
  user: undefined,
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const [slug] = params?.slug ?? ["lists"];

  return {
    props: {
      slug,
    },
    revalidate: 15 * 50, // 15 minutes
  };
}

export default Account;
