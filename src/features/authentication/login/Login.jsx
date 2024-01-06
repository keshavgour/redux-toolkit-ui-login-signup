import React from "react";
import {
  ButtonComponent,
  Input,
  LinkComponent,
} from "../../../components/form";
import Box from "@mui/material/Box";
import loginimage from "../../../assets/images/loginimage.png";
import { Typography } from "@mui/material";

export const Login = () => {
  return (
    <Box sx={{ display: "flex", px: 20, py: 9 }}>
      <Box>
        <Box sx={{ pt: 4 }}>
          <Typography variant="h4">Login</Typography>
          <Box sx={{ display: "flex", py: 2 }}>
            <Typography variant="h6">Doesn't have an account yet?</Typography>
            <Box sx={{ pl: 1, pt: 0.6 }}>
              <LinkComponent href="/signup" displayname="Signup" />
            </Box>
          </Box>
        </Box>
        <Box>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Box sx={{ pt: 2 }}>
            <ButtonComponent buttonname="Login" />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <img src={loginimage} alt="Loginimage" style={{ width: "600px" }} />
        </Box>
      </Box>
    </Box>
  );
};
