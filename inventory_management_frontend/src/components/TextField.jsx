import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";

export default function BasicTextFields({ title, value, onChange, type }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth>
        <TextField
          type={type}
          required={true}
          id="outlined-basic"
          value={value}
          onChange={onChange}
          label={title}
          variant="outlined"
        />
      </FormControl>
    </Box>
  );
}
