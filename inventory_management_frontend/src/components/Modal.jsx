import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import Modal from "@mui/material/Modal";
import AddProduct from "./AddProduct";
import { useTheme } from "@emotion/react";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: theme.palette.primary.dark,
    border: theme.palette.secondary.light,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box>
      <Button
        sx={{
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.background.alt,
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
        onClick={handleOpen}
      >
        <AddIcon />
        Add Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddProduct />
        </Box>
      </Modal>
    </Box>
  );
}
