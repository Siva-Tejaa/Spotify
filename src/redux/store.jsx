import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import accessTokenSlice from "./features/accessTokenSlice";
import fetchApiSlice from "./features/fetchApiSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    token: accessTokenSlice,
    getApi: fetchApiSlice,
  },
});

export default store;
