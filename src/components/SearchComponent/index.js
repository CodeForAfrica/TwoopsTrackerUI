import {
  IconButton,
  InputAdornment,
  InputBase,
  SvgIcon,
} from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as UserIcon } from "@/twoopstracker/assets/icons/user.svg";

const Search = (props) => {
  const classes = useStyles(props);
  return (
    <InputBase
      placeholder="Search"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            color="primary"
            size="small"
            // className={classes.button}
          >
            <SvgIcon component={UserIcon} />
          </IconButton>
        </InputAdornment>
      }
      classes={{
        root: classes.root,
        input: classes.input,
      }}
    />
  );
};

export default Search;
