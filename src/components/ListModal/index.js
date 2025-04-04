import {
  Button,
  Box,
  Modal,
  FormControl,
  FilledInput,
  InputLabel,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

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

function ModalComponent({
  open,
  onClose,
  nameValue,
  nameOnChange,
  nameLabel,
  nameHelper,
  accountsValue,
  accountsOnChange,
  accountsHelper,
  accountsErrorHelper,
  accountsLabel,
  privacyValue,
  privacyOnChange,
  deleteDescription,
  buttonLabel,
  buttonOnClick,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {nameLabel && (
          <FormControl variant="standard" className={classes.formControl}>
            {nameLabel && (
              <InputLabel className={classes.label} htmlFor="name">
                {nameLabel}
              </InputLabel>
            )}
            {nameOnChange && (
              <FilledInput
                defaultValue={nameValue || ""}
                name="name"
                id="name"
                onChange={nameOnChange}
              />
            )}
            {nameHelper && (
              <FormHelperText className={classes.label} id="name-helper-text">
                {nameHelper}
              </FormHelperText>
            )}
          </FormControl>
        )}

        {accountsLabel && (
          <FormControl variant="standard" className={classes.formControl}>
            {accountsLabel && (
              <InputLabel className={classes.label} htmlFor="accounts">
                {accountsLabel}
              </InputLabel>
            )}
            {accountsOnChange && (
              <FilledInput
                defaultValue={accountsValue || ""}
                name="accounts"
                id="accounts"
                onChange={accountsOnChange}
              />
            )}
            {accountsHelper && (
              <FormHelperText
                className={classes.label}
                id="accounts-helper-text"
              >
                {accountsHelper}
              </FormHelperText>
            )}
            {accountsErrorHelper && (
              <FormHelperText
                className={classes.error}
                id="accounts-helper-text"
              >
                {accountsErrorHelper}
              </FormHelperText>
            )}
          </FormControl>
        )}

        {privacyOnChange && (
          <FormControl variant="standard" className={classes.formControl}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={privacyValue}
                  className={classes.checkbox}
                  onChange={privacyOnChange}
                  name="status"
                />
              }
              label="Is Private"
              labelPlacement="end"
            />
          </FormControl>
        )}
        {deleteDescription && (
          <Typography className={classes.deleteDescription}>
            {deleteDescription}
          </Typography>
        )}
        <div>
          {buttonLabel && (
            <Button variant="contained" color="primary" onClick={buttonOnClick}>
              {buttonLabel}
            </Button>
          )}
        </div>
      </Box>
    </Modal>
  );
}

ModalComponent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  nameValue: PropTypes.string,
  nameOnChange: PropTypes.func,
  nameLabel: PropTypes.string,
  nameHelper: PropTypes.string,
  accountsValue: PropTypes.string,
  accountsOnChange: PropTypes.func,
  accountsHelper: PropTypes.string,
  accountsErrorHelper: PropTypes.string,
  accountsLabel: PropTypes.string,
  privacyValue: PropTypes.bool,
  privacyOnChange: PropTypes.func,
  deleteDescription: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonOnClick: PropTypes.func,
};

ModalComponent.defaultProps = {
  open: undefined,
  onClose: undefined,
  nameValue: PropTypes.string,
  nameOnChange: undefined,
  nameLabel: undefined,
  nameHelper: undefined,
  accountsValue: undefined,
  accountsOnChange: undefined,
  accountsHelper: undefined,
  accountsErrorHelper: undefined,
  accountsLabel: undefined,
  privacyValue: undefined,
  privacyOnChange: undefined,
  deleteDescription: undefined,
  buttonLabel: undefined,
  buttonOnClick: undefined,
};

export default ModalComponent;
