import {
  Button,
  Typography,
  Box,
  Modal,
  FormControl,
  FilledInput,
  InputLabel,
  FormHelperText,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import List from "@/twoopstracker/components/List";
import Section from "@/twoopstracker/components/Section";
import { createList, fetchLists } from "@/twoopstracker/lib";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
      await createList(payload);
      const result = await fetchLists();
      setLists(result);
      setOpen(false);
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormControl variant="standard" className={classes.formControl}>
              <InputLabel className={classes.label} htmlFor="name">
                List Name
              </InputLabel>
              <FilledInput name="name" id="name" onChange={handleChange} />
              <FormHelperText className={classes.label} id="name-helper-text">
                Name of list
              </FormHelperText>
            </FormControl>

            <FormControl variant="standard" className={classes.formControl}>
              <InputLabel className={classes.label} htmlFor="accounts">
                User Accounts
              </InputLabel>
              <FilledInput
                name="accounts"
                id="accounts"
                onChange={handleChange}
              />
              <FormHelperText
                className={classes.label}
                id="accounts-helper-text"
              >
                Enter twitter account names seperated by a comma i.e
                userone,usertwo
              </FormHelperText>
            </FormControl>

            <FormControl variant="standard" className={classes.formControl}>
              <FormControlLabel
                control={
                  <Checkbox
                    className={classes.checkbox}
                    onChange={handleChange}
                    name="privacy"
                  />
                }
                label="Is Private"
                labelPlacement="end"
              />
            </FormControl>
            <div>
              <Button onClick={onCreate} className={classes.createButton}>
                Create
              </Button>
            </div>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          </Box>
        </Modal>
      </div>
      {lists.map((item) => (
        <List key={item.name} classes={{ root: classes.listItem }} {...item} />
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
