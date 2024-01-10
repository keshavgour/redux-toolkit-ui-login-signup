import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "../../App.css";
export const Input = (props) => {
  const { type, label, onChange } = props;
  return (
    <Box pb={2}>
      <TextField
        required
        size="small"
        type={type}
        variant="outlined"
        label={label}
        onChange={onChange}
      />
    </Box>
  );
};
