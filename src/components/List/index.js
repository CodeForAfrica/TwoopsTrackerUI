import {
  Typography,
  Button,
  Grid,
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

import { updateList, fetchLists } from "@/twoopstracker/lib";

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

const List = ({
  name: listName,
  created_at: createdAt,
  accounts: listAccounts,
  is_private: privacyStatus,
  setLists,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(listName);
  const [privacy, setPrivacy] = useState(privacyStatus);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let accountsStr = null;
  listAccounts.forEach((account) => {
    if (accountsStr === null) {
      accountsStr = `${account.screen_name}`;
    } else {
      accountsStr = `${account.screen_name},${accountsStr}`;
    }
  });

  const [accounts, setAccounts] = useState(accountsStr);

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

  const onUpdate = async () => {
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
      await updateList(payload, "PUT");
      const result = await fetchLists();
      setLists(result);
      setOpen(false);
    } catch (e) {
      setOpen(true);
    }
  };

  const classes = useStyles(props);

  const date = new Date(createdAt).toISOString();

  const year = date.substr(0, 10);
  const hours = date.substr(11, 8);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{name}</Typography>
      <Grid container>
        <Grid item xs={8}>
          {createdAt && (
            <Typography>{`Saved on ${year} at ${hours}`}</Typography>
          )}
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleOpen} className={classes.editButton}>
            Edit
          </Button>
          <Button className={classes.deleteButton}>Delete</Button>

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
                <FilledInput
                  value={name}
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
                <FormHelperText className={classes.label} id="name-helper-text">
                  Name of list
                </FormHelperText>
              </FormControl>

              <FormControl variant="standard" className={classes.formControl}>
                <InputLabel className={classes.label} htmlFor="accounts">
                  User Accounts
                </InputLabel>
                <FilledInput
                  value={accounts}
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
                      checked={privacy}
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
                <Button onClick={onUpdate} className={classes.createButton}>
                  Update
                </Button>
              </div>
            </Box>
          </Modal>
        </Grid>
      </Grid>
    </div>
  );
};

List.propTypes = {
  name: PropTypes.string,
  accounts: PropTypes.arrayOf(PropTypes.shape({})),
  is_private: PropTypes.bool,
  created_at: PropTypes.string,
  setLists: PropTypes.func,
};

List.defaultProps = {
  name: undefined,
  accounts: undefined,
  is_private: undefined,
  created_at: undefined,
  setLists: undefined,
};

export default List;
