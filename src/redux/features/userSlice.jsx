import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  name: "Siva",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action) => {
      state = state.name + action.payload;
    },
    login: (state, action) => {
      localStorage.setItem("isLoggedIn", true);
    },
    logout: (state, action) => {
      localStorage.clear();
    },
  },
});

export const { userData, login, logout } = userSlice.actions;
export default userSlice.reducer;
