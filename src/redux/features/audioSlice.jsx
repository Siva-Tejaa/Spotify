import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  audioTrack: "",
  audioTitle: "",
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setAudioTrack: (state, action) => {
      state.audioTrack = action.payload.track;
      state.audioTitle = action.payload.name;
    },
  },
});

export const { setAudioTrack } = audioSlice.actions;
export default audioSlice.reducer;
