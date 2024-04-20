import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  isLoggedIn: false,
};

const accessTokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("access_token", action.payload);
      localStorage.setItem("isLoggedIn", true);
    },

    clearAccessToken: (state, action) => {
      state.accessToken = "";
      state.isLoggedIn = false;
      localStorage.removeItem("access_token");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { setAccessToken, clearAccessToken } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;
