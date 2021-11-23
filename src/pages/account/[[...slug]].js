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
import { lists, searches } from "@/twoopstracker/lib";

const useStyles = makeStyles(({ typography }) => ({
  section: {
    marginBottom: typography.pxToRem(70),
    marginTop: typography.pxToRem(60),
  },
}));

function Account({ foundSearches, foundLists, slug, ...props }) {
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
      slug: "saved-search",
      href: "/account/searches",
      children: (
        <UserSearch
          searches={foundSearches}
          paginationProps={searchPgination}
        />
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
        <Tabs name="account" activeTab={slug} items={tabItems} />
      </Section>
    </Page>
  );
}

Account.propTypes = {
  foundLists: PropTypes.arrayOf(PropTypes.shape({})),
  foundSearches: PropTypes.arrayOf(PropTypes.shape({})),
  slug: PropTypes.string,
};

Account.defaultProps = {
  foundSearches: undefined,
  foundLists: undefined,
  slug: undefined,
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

  const { results: foundLists } = await lists();
  const foundSearches = await searches({});
  const [slug] = params?.slug ?? ["lists"];

  return {
    props: {
      slug,
      foundSearches,
      foundLists,
    },
  };
}

export default Account;
