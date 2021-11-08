import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import List from "@/twoopstracker/components/List";
import Section from "@/twoopstracker/components/Section";

const ListItems = ({ data, ...props }) => {
  const classes = useStyles(props);

  if (!data.length) {
    return null;
  }

  return (
    <Section>
      {data.map((item) => (
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
