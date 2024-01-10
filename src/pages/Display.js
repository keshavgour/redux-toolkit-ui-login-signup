import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const credentials = useSelector((state) => state.auth.credentials);
  return (
    <Box>
      <Typography variant="h4">EmailId: {credentials.email}</Typography>
      <Typography variant="h4">Name: {credentials.name}</Typography>
    </Box>
  );
};

export default Display;
