import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "../../App.css";
export const Input = (props) => {
  return (
    <Box sx={{ pb: 2 }}>
      <TextField
        required
        size="small"
        type={props.type}
        variant="outlined"
        label={props.label}
      />
    </Box>
  );
};
