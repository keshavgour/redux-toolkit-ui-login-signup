import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupPage } from "./pages/Signup.js";
import { LoginPage } from "./pages/Login";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store";
import Display from "./pages/Display.js";

function App() {
  return (
    <Provider store={store}>
      <Box>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/display" element={<Display />}></Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </Provider>
  );
}

export default App;
