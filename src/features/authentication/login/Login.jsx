import React from "react";
import { ButtonComponent, Input } from "../../../components/form";
import Box from "@mui/material/Box";
import loginImage from "../../../assets/images/loginImage.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Box sx={{ display: "flex", px: 20, py: 9 }}>
      <Box>
        <Box pt={4}>
          <Typography variant="h4">Login</Typography>
          <Box sx={{ display: "flex", py: 2 }}>
            <Typography variant="h6">Doesn't have an account yet?</Typography>
            <Box pl={1} pt={0.6}>
              <Link to={"/signup"}>Signup</Link>
            </Box>
          </Box>
        </Box>
        <Box>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Box pt={2}>
            <ButtonComponent buttonName="Login" />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <img src={loginImage} alt="imageLogin" style={{ width: "600px" }} />
        </Box>
      </Box>
    </Box>
  );
};
