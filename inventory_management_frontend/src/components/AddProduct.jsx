import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Button,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import SelectField from "components/SelectField";
import BasicTextFields from "components/TextField";
import BasicRating from "components/Rating";

const AddProduct = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="ADD NEW PRODUCT"
        subtitle="Add your new product with all details"
      />

      <Box
        mt="1rem"
        display="flex"
        flexDirection="column"
        gap="1rem"
        width="fullWidth"
        sx={{ display: "flex", gap: "1rem", width: "100%" }}
      >
        <BasicTextFields title="Title" />
        <BasicTextFields title="Price" />
        <BasicTextFields title="Description" />
        <SelectField />
        <BasicRating />
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <AddIcon />
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
