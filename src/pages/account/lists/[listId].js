import { getSession } from "next-auth/react";
import PropTypes from "prop-types";
import React from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
import { list } from "@/twoopstracker/lib";
import { settings } from "@/twoopstracker/lib/cms";

export default function Index({ data, ...props }) {
  return (
    <Page {...props}>
      <AccountsList data={data} {...props} />
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

  const data = await list(paramData.listId, session);

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
