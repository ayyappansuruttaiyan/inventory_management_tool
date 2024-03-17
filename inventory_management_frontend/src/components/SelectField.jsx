import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectField() {
  const [categories, setCategories] = React.useState("");

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categories}
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem value={10}>Clothing</MenuItem>
          <MenuItem value={20}>Accessories</MenuItem>
          <MenuItem value={30}>Misc</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
