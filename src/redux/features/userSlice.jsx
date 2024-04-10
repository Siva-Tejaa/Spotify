import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  name: "Siva",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action) => {
      state = state.name + action.payload;
    },
    testLogin: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
    },
    testLogout: (state, action) => {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
    },
  },
});

export const { userData, testLogin, testLogout } = userSlice.actions;
export default userSlice.reducer;
