import { Button, Typography, Box, Modal } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import List from "@/twoopstracker/components/List";
import Section from "@/twoopstracker/components/Section";

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

const ListItems = ({ data, ...props }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles(props);

  if (!data.length) {
    return null;
  }

  return (
    <Section>
      <div className={classes.section}>
        <Typography>Your Lists</Typography>
        <Button onClick={handleOpen} className={classes.button}>
          Create New List
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
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
