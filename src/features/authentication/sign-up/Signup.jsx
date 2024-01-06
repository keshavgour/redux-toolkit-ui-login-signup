import React from "react";
import {
  ButtonComponent,
  Input,
  LinkComponent,
} from "../../../components/form";
import { Box, Typography } from "@mui/material";
import Signupimage from "../../../assets/images/Signupimage.png";

export const Signup = () => {
  return (
    <Box sx={{ display: "flex", px: 20, py: 12 }}>
      <Box>
        <Box sx={{ pb: 3 }}>
          <Typography variant="h4">Signup</Typography>
        </Box>
        <Box>
          <Input label="Email" type="email" />
          <Input label="Name" type="text" />
          <Input label="Password" type="password" />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6">Already a member?</Typography>
            <Box sx={{ pl: 1, pt: 0.6 }}>
              <LinkComponent href="/" displayname="Login" />
            </Box>
          </Box>
          <Box sx={{ pt: 3 }}>
            <ButtonComponent buttonname="Signup" />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <img src={Signupimage} alt="Signupimage" style={{ width: "600px" }} />
        </Box>
      </Box>
    </Box>
  );
};
