import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";

import { ReactComponent as FacebookIcon } from "@/twoopstracker/assets/icons/facebook-icon.svg";
import { ReactComponent as LinkedInIcon } from "@/twoopstracker/assets/icons/linkedin-icon.svg";
import { ReactComponent as TwitterIcon } from "@/twoopstracker/assets/icons/twitter-icon.svg";
import { ReactComponent as WhatsAppIcon } from "@/twoopstracker/assets/icons/whatsApp-icon.svg";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  icon: {
    height: typography.pxToRem(24),
    width: typography.pxToRem(24),
  },
}));

const componentMap = {
  Facebook: { icon: FacebookIcon, button: FacebookShareButton },
  Twitter: { icon: TwitterIcon, button: TwitterShareButton },
  LinkedIn: { icon: LinkedInIcon, button: LinkedinShareButton },
  WhatsApp: { icon: WhatsAppIcon, button: WhatsappShareButton },
};

function ShareButton({ name, url, ...props }) {
  const classes = useStyles(props);
  const { button: SocialButton, icon: SocialIcon } = componentMap[name];
  return (
    <SocialButton url={url} {...props} className={classes.root}>
      <SocialIcon className={classes.icon} />
    </SocialButton>
  );
}

ShareButton.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

ShareButton.defaultProps = {
  name: undefined,
  title: undefined,
  url: undefined,
};

export default ShareButton;
