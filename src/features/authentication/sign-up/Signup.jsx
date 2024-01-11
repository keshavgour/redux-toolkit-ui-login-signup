import React, { useState } from "react";
import { ButtonComponent, Input } from "../../../components/form";
import { Box, Typography } from "@mui/material";
import SignupImage from "../../../assets/images/SignupImage.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    dispatch(setCredentials({ email, name, password }));
    navigate("/display");
  };

  return (
    <Box sx={{ display: "flex", px: 20, py: 12 }}>
      <Box>
        <Box pb={3}>
          <Typography variant="h4">Signup</Typography>
        </Box>
        <Box>
          <Input
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6">Already a member?</Typography>
            <Box pl={1} pt={0.6}>
              <Link to={"/"}>Login</Link>
            </Box>
          </Box>
          <Box pt={3}>
            <ButtonComponent buttonName="Signup" onClick={onClick} />
            <Box pt={1}>
              <Link to={"/reactQuery"}>Users Data</Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <img src={SignupImage} alt="imageSignup" style={{ width: "600px" }} />
        </Box>
      </Box>
    </Box>
  );
};
