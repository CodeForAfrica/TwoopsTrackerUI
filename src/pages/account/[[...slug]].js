import { makeStyles } from "@material-ui/core/styles";
import { getSession } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import Section from "@/twoopstracker/components/Section";
import Tabs from "@/twoopstracker/components/Tabs";
import UserSearch from "@/twoopstracker/components/UserSearch";
import { getSavedSearches } from "@/twoopstracker/lib";

const useStyles = makeStyles(({ typography }) => ({
  section: {
    marginBottom: typography.pxToRem(70),
    marginTop: typography.pxToRem(60),
  },
}));

function Account({ searches, slug, ...props }) {
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
  searches: PropTypes.arrayOf(PropTypes.shape({})),
  slug: PropTypes.string,
};

Account.defaultProps = {
  searches: undefined,
  slug: undefined,
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const session = await getSession({ req });

  if (!(session && res && session?.user)) {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
    return null;
  }

  const searches = await getSavedSearches(session);
  const [slug] = params?.slug ?? ["lists"];

  return {
    props: {
      slug,
      searches,
    },
  };
}

export default Account;
