import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  useTheme,
  useMediaQuery,
  Button,
  Typography,
} from "@mui/material";
import Header from "components/Header";
import { useAddProductMutation } from "state/api";
import BasicTextFields from "components/TextField";
import SelectField from "components/SelectField";
import BasicRating from "components/Rating";

const AddProduct = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [name, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [supply, setSupply] = useState();
  const [rating, setRating] = useState(1);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [addProduct, { isLoading, isError }] = useAddProductMutation();

  const isValidProduct = () => {
    if (!name || !price || !description || !category || !supply || !rating) {
      setError("Please enter all required fields");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidProduct()) return;
    try {
      // Call the addProduct mutation with the product data
      await addProduct({
        name,
        price,
        description,
        category,
        rating,
        supply,
      });
      console.log(name, price, description, category, rating, supply);
      // Clear the form fields after successful addition
      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setRating(1);
      setSupply("");
      setMessage("product added successfully");
    } catch (error) {
      setMessage("Error adding product");
      // Optionally, handle error feedback here
    }
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        // title="ADD NEW PRODUCT"
        subtitle="Add your new product with all details"
      />
      {error && (
        <Typography variant="h6" fontWeight="bold" color="error">
          {error}
        </Typography>
      )}

      {message && (
        <Box color="success" variant="h6">
          {message}
        </Box>
      )}
      <Box
        mt="1rem"
        display="flex"
        flexDirection="column"
        gap="1rem"
        width="fullWidth"
        sx={{ display: "flex", gap: "1rem", width: "100%" }}
      >
        <BasicTextFields
          title="Product Name"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
        <BasicTextFields
          title="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <BasicTextFields
          title="Production Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SelectField
          title="Choose category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <BasicRating
          value={rating}
          onChange={(newValue) => setRating(newValue)}
        />
        <BasicTextFields
          title="Available Quantity"
          value={supply}
          onChange={(e) => setSupply(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          disabled={isLoading} // Disable the button when the mutation is in progress
        >
          <AddIcon />
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
