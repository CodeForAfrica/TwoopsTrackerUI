import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import React from "react";

import Section from "@/twoopstracker/components/Section";

function UserProfile() {
  return (
    <Section>
      <List>
        <ListItem>
          <ListItemText>
            <Typography>Lists</Typography>
          </ListItemText>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText>
            <Typography>Saved Searches</Typography>
          </ListItemText>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText>
            <Typography>Upload data</Typography>
          </ListItemText>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText>
            <Typography>Your account</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Section>
  );
}

export default UserProfile;
