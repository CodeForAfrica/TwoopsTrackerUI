import Image from "next/image";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";

const TweetCard = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <div className={classes.icon}>
        <Image layout="fill" src={UserIcon} />
      </div>
    </div>
  );
};

export default TweetCard;
