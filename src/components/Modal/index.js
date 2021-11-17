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
} from "@material-ui/core";
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

const ModalComponent = ({
  open,
  onClose,
  nameValue,
  nameOnChange,
  nameLabel,
  nameHelper,
  accountsValue,
  accountsOnChange,
  accountsHelper,
  accountsLabel,
  privacyValue,
  privacyOnChange,
  deleteDescription,
  buttonLabel,
  buttonOnClick,
  ...props
}) => {
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
                value={nameValue || ""}
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
                value={accountsValue || ""}
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
          </FormControl>
        )}

        {privacyOnChange && (
          <FormControl variant="standard" className={classes.formControl}>
            {privacyValue && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={privacyValue}
                    className={classes.checkbox}
                    onChange={privacyOnChange}
                    name="privacy"
                  />
                }
                label="Is Private"
                labelPlacement="end"
              />
            )}
          </FormControl>
        )}
        {deleteDescription && <Typography>{deleteDescription}</Typography>}
        <div>
          {buttonLabel && (
            <Button onClick={buttonOnClick} className={classes.createButton}>
              {buttonLabel}
            </Button>
          )}
        </div>
      </Box>
    </Modal>
  );
};

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
  accountsLabel: undefined,
  privacyValue: undefined,
  privacyOnChange: undefined,
  deleteDescription: undefined,
  buttonLabel: undefined,
  buttonOnClick: undefined,
};

export default ModalComponent;
