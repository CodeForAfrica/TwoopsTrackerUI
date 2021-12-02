import { Tab, Tabs as MuiTabs, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import TabPanel from "@/twoopstracker/components/Tabs/TabPanel";

function a11yProps(name, index) {
  return {
    id: `${name}-tab-${index}`,
    "aria-controls": `${name}-tabpanel-${index}`,
  };
}

function Tabs({ activeTab, items, name: nameProp, ...props }) {
  const router = useRouter();
  const classes = useStyles(props);
  const [value, setValue] = useState(activeTab);
  const name = nameProp || "simple";

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <MuiTabs
        value={value}
        orientation={isUpLg ? "vertical" : "horizontal"}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="off"
        aria-label={`${name} tabs`}
        classes={{
          root: classes.tabs,
          indicator: classes.indicator,
        }}
      >
        {items.map(({ label, href }, index) => (
          <Tab
            key={label}
            label={label}
            TabIndicatorProps={{
              style: { transition: "none" },
            }}
            onClick={
              href
                ? (e) => {
                    e.preventDefault();
                    router.push(href, href, { shallow: true });
                  }
                : null
            }
            {...a11yProps(name, index)}
            disableRipple
            classes={{
              root: classes.tab,
              wrapper: classes.wrapper,
              selected: classes.tabSelected,
            }}
          />
        ))}
      </MuiTabs>
      {items.map((item, index) => (
        <TabPanel
          key={item.label}
          name={name}
          selected={value}
          value={index}
          classes={{ root: classes.tabPanel }}
        >
          {item.children}
        </TabPanel>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.number,
  name: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      children: PropTypes.string,
    })
  ),
};

Tabs.defaultProps = {
  activeTab: 0,
  items: undefined,
  name: undefined,
};

export default Tabs;
