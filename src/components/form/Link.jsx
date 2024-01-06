import { Box } from "@mui/material";
import React from "react";
//import { Link } from 'react-router-dom'
import Link from "@mui/material/Link";

export const LinkComponent = (props) => {
  return (
    <Box>
      <Link href={props.href}>{props.displayname}</Link>
    </Box>
  );
};
