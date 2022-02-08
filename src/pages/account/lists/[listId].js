import { getSession } from "next-auth/react";
import PropTypes from "prop-types";
import React from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
import { listAccountsPagination } from "@/twoopstracker/config";
import { listAccounts, list } from "@/twoopstracker/lib";
import { settings } from "@/twoopstracker/lib/cms";

export default function Index({ data, ...props }) {
  return (
    <Page {...props}>
      <AccountsList
        data={data}
        addAccountLabel="Add Account"
        paginationProps={listAccountsPagination}
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
  const { params: paramData } = context;
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const accounts = await listAccounts(paramData.listId, session); // NOTE(Gertrude): Currently returning accounts with different ids than backend even after cache clearing
  const listData = await list(paramData.listId, session);

  const data = { ...listData, ...accounts };

  return {
    props: {
      ...settings(),
      data,
      session,
      apiUrl: `/api/lists/${paramData.listId}`,
      editable: true,
    },
  };
}
