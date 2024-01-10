import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const ButtonComponent = (props) => {
  const { onClick, buttonName } = props;
  return (
    <Box>
      <Button type="submit" variant="contained" onClick={onClick}>
        {buttonName}
      </Button>
    </Box>
  );
};
