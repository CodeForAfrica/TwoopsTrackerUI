import { makeStyles } from "@material-ui/core/styles";
import { getSession } from "next-auth/react";
import PropTypes from "prop-types";
import React from "react";

import Lists from "@/twoopstracker/components/Lists";
import Page from "@/twoopstracker/components/Page";
import Section from "@/twoopstracker/components/Section";
import Tabs from "@/twoopstracker/components/Tabs";
import Upload from "@/twoopstracker/components/Upload";
import UserAccount from "@/twoopstracker/components/UserAccount";
import UserSearch from "@/twoopstracker/components/UserSearch";
import { upload, paginationOptions } from "@/twoopstracker/config";
import { lists, getSavedSearches } from "@/twoopstracker/lib";
import { settings } from "@/twoopstracker/lib/cms";

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

function Account({ lists: listsProp, activeSlug, searches, ...props }) {
  const classes = useStyles(props);
  const tabItems = Object.entries(accountPages).map(([slug, values]) => {
    let children;
    switch (slug) {
      case "lists":
        children = (
          <Lists
            createLabel="Create New List"
            titleLabel="Your Lists"
            noListLabel="There are no lists"
            lists={listsProp}
            paginationProps={paginationOptions}
            {...props}
          />
        );
        break;
      case "searches":
        children = (
          <UserSearch searches={searches} paginationProps={paginationOptions} />
        );
        break;
      case "data":
        children = <Upload {...upload} />;
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
  activeSlug: PropTypes.string,
  lists: PropTypes.arrayOf(PropTypes.shape({})),
  searches: PropTypes.shape({}),
};

Account.defaultProps = {
  activeSlug: undefined,
  lists: undefined,
  searches: undefined,
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

  const { query: userQuery } = context;
  const { page = 1, pageSize = 20, sort = "name" } = userQuery;
  const userName = session?.user?.name;
  const [activeSlug] = params?.slug ?? ["lists"];
  const activePageTitle = accountPages[activeSlug]?.label ?? "Account";
  const title = `${activePageTitle}${userName ? ` | ${userName}` : ""}`;
  const foundLists = await lists({ page, pageSize, sort }, session);
  const searches = await getSavedSearches({ page, pageSize }, session);

  const query = {
    ...userQuery,
    sort: activeSlug === "lists" ? sort : null,
    page: ["lists", "searches"].includes(activeSlug) ? page : null,
    pageSize: ["lists", "searches"].includes(activeSlug) ? pageSize : null,
  };

  return {
    props: {
      ...settings(),
      ...query,
      activeSlug,
      lists: foundLists,
      searches,
      session,
      title,
    },
  };
}

export default Account;
