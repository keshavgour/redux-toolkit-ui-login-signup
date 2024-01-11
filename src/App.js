import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupPage } from "./pages/Signup.js";
import { LoginPage } from "./pages/Login";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store";
import Display from "./pages/Display.js";
import { QueryClientProvider, QueryClient } from "react-query";
import ReactQuery from "./ReactQuery.jsx";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Box>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route path="/display" element={<Display />}></Route>
              <Route path="/reactQuery" element={<ReactQuery />}></Route>
            </Routes>
          </BrowserRouter>
        </Box>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
