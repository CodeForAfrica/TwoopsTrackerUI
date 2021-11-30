import { Typography } from "@material-ui/core";
import { useSession } from "next-auth/client";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import useSWR from "swr";

import useStyles from "./useStyles";

import Account from "@/twoopstracker/components/Account";
import Section from "@/twoopstracker/components/Section";
import fetchJson from "@/twoopstracker/utils/fetchJson";

const AccountList = ({
  data: { name, accounts, is_private: privacy, id },
  ...props
}) => {
  const classes = useStyles(props);

  const [listAccounts, setListAccounts] = useState(accounts);
  const [session] = useSession();

  const fetcher = (url, token) => fetchJson(url, token);
  const { data, mutate } = useSWR([`/api/lists/${id}`, session], fetcher);

  useEffect(() => {
    if (data) {
      setListAccounts(data.accounts);
    }
  }, [data]);

  const onDelete = async (account) => {
    const newAccounts = listAccounts.filter(
      (acc) => acc.screen_name !== account
    );

    const payload = {
      name,
      accounts: newAccounts,
      owner: 1,
      is_private: privacy,
    };

    await fetchJson(`/api/lists/${id}`, null, {
      method: "PUT",
      body: JSON.stringify(payload),
    });

    mutate({ ...data });
  };

  return (
    <Section className={classes.root}>
      {name && <Typography className={classes.listName}>{name}</Typography>}
      {listAccounts?.map((account) => (
        <Account
          key={account.screen_name}
          account={account}
          items={listAccounts.length}
          onDelete={onDelete}
        />
      ))}
    </Section>
  );
};

AccountList.propTypes = {
  data: PropTypes.shape({
    accounts: PropTypes.arrayOf(PropTypes.shape({})),
    name: PropTypes.string,
    is_private: PropTypes.bool,
    id: PropTypes.number,
  }),
};

AccountList.defaultProps = {
  data: undefined,
};

export default AccountList;
