import {
  Typography,
  Button,
  Popper,
  Paper,
  Grow,
  MenuList,
  MenuItem,
  Snackbar,
  ClickAwayListener,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import useSWR from "swr";

import addToList from "@/twoopstracker/assets/icons/Square Plus.svg";
import Image from "@/twoopstracker/components/Image";
import fetchJson from "@/twoopstracker/utils/fetchJson";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  paper: {
    width: typography.pxToRem(150),
    padding: `${typography.pxToRem(0)} ${typography.pxToRem(16)}`,
    marginLeft: 0,
  },
  menuList: {},
  snackbar: {
    maxWidth: 600,
    "& > * + *": {
      marginTop: "2rem",
    },
  },
  addToList: {
    color: "black",
    display: "flex",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "black",
    },
    [breakpoints.up("lg")]: {
      color: "black",
      "&:hover, &:focus, &:focus-within": {
        color: "black",
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    },
  },
  menuItem: {
    color: "black",
    fontSize: typography.pxToRem(20),
    padding: typography.pxToRem(12.8),
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "#DB1111",
    },
  },
  label: {
    fontSize: typography.pxToRem(24),
    fontFamily: typography.h4.fontFamily,
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "149.49%",
    textAlign: "right",
    textTransform: "capitalize",
  },
  text: {
    "&::after": {
      content: '""',
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      marginLeft: 0,
      height: 0,
      width: 0,
    },
    "&:hover::after": {
      content: '""',
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      transition: "margin 0.3s ease",
      marginLeft: 0,
      height: 0,
      width: 0,
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AddToList({
  handle,
  results: listsProp,
  addToListLabel,
  successLabel,
  ...props
}) {
  const classes = useStyles(props);
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [listIncluded, setListIncluded] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [lists, setLists] = useState(listsProp ? listsProp.results : []);

  const fetcher = (url) => fetchJson(url);
  const { data } = useSWR(`/api/lists`, fetcher);

  useEffect(() => {
    if (data) {
      setLists(data.results);
    }
  }, [data]);

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const handleCreate = async (event) => {
    const listId = event.target.dataset.id;
    const accountData = await fetchJson(`/api/lists/${listId}`, fetcher);
    setOpen(false);
    setOpenSnackBar(true);

    if (accountData.accounts?.includes({ screen_name: handle })) {
      setListIncluded(false);
    } else {
      accountData.accounts?.push({ screen_name: handle });
      setListIncluded(true);
    }

    try {
      const results = fetchJson(`/api/lists/${listId}`, null, {
        method: "PUT",
        body: JSON.stringify(accountData),
      });
      return results;
    } catch (error) {
      return error;
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Button
        variant="text"
        size="medium"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        classes={{
          root: classes.addToList,
          text: classes.text,
        }}
        endIcon={
          <Image width={24} height={24} alt="Add to list" src={addToList} />
        }
      >
        <Typography className={classes.list}>{addToListLabel}</Typography>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom",
            }}
          >
            <Paper
              classes={{
                root: classes.paper,
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  className={classes.menuList}
                >
                  {lists?.map((item) => (
                    <MenuItem
                      key={item.name}
                      data-id={item.id}
                      className={classes.menuItem}
                      onClick={handleCreate}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {listIncluded ? (
        <Snackbar
          open={openSnackBar}
          autoHideDuration={6000}
          onClose={handleSnackBarClose}
        >
          <Alert onClose={handleSnackBarClose} severity="success">
            {successLabel}
          </Alert>
        </Snackbar>
      ) : null}
    </div>
  );
}

AddToList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  addToListLabel: PropTypes.string,
  successLabel: PropTypes.string,
  data: PropTypes.shape({
    accounts: PropTypes.arrayOf(PropTypes.shape({})),
    name: PropTypes.string,
    is_private: PropTypes.bool,
    id: PropTypes.number,
  }),
  handle: PropTypes.string,
};

AddToList.defaultProps = {
  handle: undefined,
  addToListLabel: undefined,
  successLabel: undefined,
  results: undefined,
  data: undefined,
};

export default AddToList;
