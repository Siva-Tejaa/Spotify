import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playListDetails: [],
};

const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    setPlayList: (state, action) => {
      state.playListDetails = action.payload;
    },
  },
});

export const { setPlayList } = playListSlice.actions;
export default playListSlice.reducer;
