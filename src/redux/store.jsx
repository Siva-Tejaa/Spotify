import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import menuSlice from "./features/menuSlice";
import fetchApiSlice from "./features/fetchApiSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    menu: menuSlice,
    getApi: fetchApiSlice,
  },
});

export default store;
