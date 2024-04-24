import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import accessTokenSlice from "./features/accessTokenSlice";
import fetchApiSlice from "./features/fetchApiSlice";
import userSlice from "./features/userSlice";
import playListSlice from "./features/playListSlice";
import audioSlice from "./features/audioSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    token: accessTokenSlice,
    getApi: fetchApiSlice,
    user: userSlice,
    playList: playListSlice,
    audio: audioSlice,
  },
});

export default store;
