import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import accessTokenSlice from "./features/accessTokenSlice";
import fetchApiSlice from "./features/fetchApiSlice";
import userSlice from "./features/userSlice";
import setPlayList from "./features/playListSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    token: accessTokenSlice,
    getApi: fetchApiSlice,
    user: userSlice,
    playList: setPlayList,
  },
});

export default store;
