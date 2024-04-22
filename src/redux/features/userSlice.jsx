import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { userData } = userSlice.actions;
export default userSlice.reducer;
