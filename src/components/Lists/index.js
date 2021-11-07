import React from "react";

import useStyles from "./useStyles";

import List from "@/twoopstracker/components/List";
import Section from "@/twoopstracker/components/Section";

const items = [
  { listName: "List One", createdAt: "Saved on yy/mm/dd at 00:00:00" },
  { listName: "List Two", createdAt: "Saved on yy/mm/dd at 00:00:00" },
  { listName: "List Three", createdAt: "Saved on yy/mm/dd at 00:00:00" },
  { listName: "List Four", createdAt: "Saved on yy/mm/dd at 00:00:00" },
];
const ListItems = (props) => {
  const classes = useStyles(props);
  return (
    <Section>
      {items.map((item) => (
        <List classes={{ root: classes.listItem }} {...item} />
      ))}
    </Section>
  );
};

export default ListItems;
