import { makeStyles } from "@material-ui/core/styles";
import { getSession } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";

import Lists from "@/twoopstracker/components/Lists";
import Page from "@/twoopstracker/components/Page";
import Section from "@/twoopstracker/components/Section";
import Tabs from "@/twoopstracker/components/Tabs";
import UserSearch from "@/twoopstracker/components/UserSearch";
import { searchPgination } from "@/twoopstracker/config";
import { lists, getSavedSearches } from "@/twoopstracker/lib";

const useStyles = makeStyles(({ typography }) => ({
  section: {
    marginBottom: typography.pxToRem(70),
    marginTop: typography.pxToRem(60),
  },
}));

function Account({ foundLists, activeSlug, searches, ...props }) {
  const classes = useStyles(props);

  const tabItems = [
    {
      label: "Lists",
      slug: "lists",
      href: "/account/lists",
      children: <Lists results={foundLists} />,
    },
    {
      label: "Saved Search",
      slug: "searches",
      href: "/account/searches",
      children: (
        <UserSearch searches={searches} paginationProps={searchPgination} />
      ),
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
        <Tabs
          name="account"
          activeTab={tabItems?.map(({ slug }) => slug)?.indexOf(activeSlug)}
          items={tabItems}
        />
      </Section>
    </Page>
  );
}

Account.propTypes = {
  foundLists: PropTypes.arrayOf(PropTypes.shape({})),
  searches: PropTypes.arrayOf(PropTypes.shape({})),
  activeSlug: PropTypes.string,
};

Account.defaultProps = {
  searches: undefined,
  foundLists: undefined,
  activeSlug: undefined,
};

export async function getServerSideProps(context) {
  const { params } = context;
  const session = await getSession(context);
  if (!(session && session?.user)) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const [activeSlug] = params?.slug ?? ["lists"];
  const results = await lists();
  const searches = await getSavedSearches({ pageSize: 3 }, session);

  return {
    props: {
      activeSlug,
      searches,
      foundLists: results?.results ?? null,
    },
  };
}

export default Account;