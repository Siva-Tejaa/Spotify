import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      return !state;
    },

    closeMenu: (state, action) => {
      return (state = false);
    },
  },
});

export const { setMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
