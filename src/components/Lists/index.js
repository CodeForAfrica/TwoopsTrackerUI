import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import List from "@/twoopstracker/components/List";
import CustomModal from "@/twoopstracker/components/Modal";
import Section from "@/twoopstracker/components/Section";
import { updateList, fetchLists } from "@/twoopstracker/lib";

const ListItems = ({ data: listsProp, ...props }) => {
  const [open, setOpen] = useState(false);
  const [lists, setLists] = useState(listsProp);
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles(props);

  const onCreate = async () => {
    const accountsMap = accounts
      .split(",")
      .map((item) => ({ screen_name: item }));

    const payload = {
      name,
      accounts: accountsMap,
      owner: 1,
      is_private: privacy,
    };

    try {
      await updateList(payload, "POST");
      const result = await fetchLists();

      setLists(result);
      setOpen(false);
      setName("");
      setAccounts("");
      setPrivacy(false);
    } catch (e) {
      setOpen(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    }

    if (event.target.name === "accounts") {
      setAccounts(event.target.value);
    }

    if (event.target.name === "privacy") {
      setPrivacy(event.target.checked);
    }
  };

  if (!listsProp.length) {
    return null;
  }

  return (
    <Section>
      <div className={classes.section}>
        <Typography>Your Lists</Typography>
        <Button onClick={handleOpen} className={classes.button}>
          Create New List
        </Button>
        <CustomModal
          open={open}
          onClose={handleClose}
          nameValue={name}
          nameLabel="ListName"
          nameHelper="Name of List"
          nameOnChange={handleChange}
          accountsLabel="User Accounts"
          accountsOnChange={handleChange}
          accountsHelper="Enter twitter account names seperated by a comma i.e userone,usertwo"
          privacyOnChange={handleChange}
          accountsValue={accounts}
          privacyValue={privacy}
          buttonLabel="Create"
          buttonOnClick={onCreate}
        />
      </div>
      {lists.map((item) => (
        <List
          key={item.name}
          classes={{ root: classes.listItem }}
          {...item}
          setLists={setLists}
        />
      ))}
    </Section>
  );
};

ListItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

ListItems.defaultProps = {
  data: undefined,
};

export default ListItems;
