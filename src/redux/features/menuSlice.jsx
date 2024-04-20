import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  topActiveItem: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },

    settopActiveItem: (state, action) => {
      state.topActiveItem = action.payload;
    },
  },
});

export const { setMenu, closeMenu, settopActiveItem } = menuSlice.actions;
export default menuSlice.reducer;
