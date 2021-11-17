import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Account from "@/twoopstracker/components/Account";
import Section from "@/twoopstracker/components/Section";

const AccountList = ({ data: { name, accounts }, ...props }) => {
  const classes = useStyles(props);
  return (
    <Section className={classes.root}>
      {name && <Typography className={classes.listName}>{name}</Typography>}
      {accounts?.map((account) => (
        <Account key={account.screen_name} account={account} />
      ))}
    </Section>
  );
};

AccountList.propTypes = {
  data: PropTypes.shape({
    accounts: PropTypes.arrayOf(PropTypes.shape({})),
    name: PropTypes.string,
  }),
};

AccountList.defaultProps = {
  data: undefined,
};

export default AccountList;
