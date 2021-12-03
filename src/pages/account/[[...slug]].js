import { makeStyles } from "@material-ui/core/styles";
import { getSession } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";

import Lists from "@/twoopstracker/components/Lists";
import Page from "@/twoopstracker/components/Page";
import Section from "@/twoopstracker/components/Section";
import Tabs from "@/twoopstracker/components/Tabs";
import UserAccount from "@/twoopstracker/components/UserAccount";
import UserSearch from "@/twoopstracker/components/UserSearch";
import { searchPagination, listPagination } from "@/twoopstracker/config";
import { lists, getSavedSearches } from "@/twoopstracker/lib";

const useStyles = makeStyles(({ typography }) => ({
  section: {
    marginBottom: typography.pxToRem(70),
    marginTop: typography.pxToRem(60),
  },
}));

const accountPages = {
  lists: {
    label: "Lists",
    href: "/account/lists",
  },
  searches: {
    label: "Saved Search",
    href: "/account/searches",
  },
  data: {
    label: "Upload Data",
    href: "/account/data",
  },
  settings: {
    label: "Your Account",
    href: "/account/settings",
  },
};

function Account({ foundLists, activeSlug, searches, ...props }) {
  const classes = useStyles(props);
  const tabItems = Object.entries(accountPages).map(([slug, values]) => {
    let children;
    switch (slug) {
      case "lists":
        children = (
          <Lists results={foundLists} paginationProps={listPagination} />
        );
        break;
      case "searches":
        children = (
          <UserSearch searches={searches} paginationProps={searchPagination} />
        );
        break;
      case "settings":
        children = <UserAccount />;
        break;
      default:
        children = <div />;
    }
    return { ...values, slug, children };
  });
  return (
    <Page {...props}>
      <Section classes={{ root: classes.section }}>
        <Tabs
          name="account"
          activeTab={tabItems?.map(({ slug }) => slug)?.indexOf(activeSlug)}
          items={tabItems}
          key={activeSlug}
        />
      </Section>
    </Page>
  );
}

Account.propTypes = {
  foundLists: PropTypes.arrayOf(PropTypes.shape({})),
  searches: PropTypes.shape({}),
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

  const userName = session?.user?.name;
  const [activeSlug] = params?.slug ?? ["lists"];
  const activePageTitle = accountPages[activeSlug]?.label ?? "Account";
  const title = `${activePageTitle}${userName ? ` | ${userName}` : ""}`;
  const results = await lists(session, { pageSize: 5 });
  const searches = await getSavedSearches({ pageSize: 3 }, session);

  return {
    props: {
      activeSlug,
      searches,
      foundLists: results,
      title,
      session,
    },
  };
}

export default Account;
