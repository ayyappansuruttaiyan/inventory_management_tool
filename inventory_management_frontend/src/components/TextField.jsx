import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";

export default function BasicTextFields({ title }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth>
        <TextField id="outlined-basic" label={title} variant="outlined" />
      </FormControl>
    </Box>
  );
}
