import { getSession } from "next-auth/react";
import PropTypes from "prop-types";
import React from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
import { paginationOptions } from "@/twoopstracker/config";
import { tweeterAccounts, tweeterAccountsList } from "@/twoopstracker/lib";
import { settings, accountList } from "@/twoopstracker/lib/cms";

export default function Index({ data, ...props }) {
  return (
    <Page {...props}>
      <AccountsList
        data={data}
        paginationProps={paginationOptions}
        {...props}
      />
    </Page>
  );
}

Index.propTypes = {
  data: PropTypes.shape({}),
};

Index.defaultProps = {
  data: undefined,
};

export async function getServerSideProps(context) {
  const {
    params: { listId },
  } = context;
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const list = await tweeterAccountsList(listId, session);
  // NOTE(Gertrude): Currently returning accounts with different ids than backend even after cache clearing
  const accounts = await tweeterAccounts(
    { list: listId, page: 1, pageSize: 20 },
    session
  );

  const data = { ...list, ...accounts };

  return {
    props: {
      ...settings(),
      ...accountList(),
      data,
      session,
      apiUrl: `/api/lists/${listId}`,
      editable: true,
    },
  };
}
