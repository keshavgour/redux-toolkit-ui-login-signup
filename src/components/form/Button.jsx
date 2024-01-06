import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const ButtonComponent = (props) => {
  return (
    <Box>
      <Button type="submit" variant="contained">
        {props.buttonname}
      </Button>
    </Box>
  );
};
