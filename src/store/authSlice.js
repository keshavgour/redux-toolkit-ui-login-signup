import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credentials: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.credentials = action.payload;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
