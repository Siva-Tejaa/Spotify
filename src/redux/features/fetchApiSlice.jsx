import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  data: [],
  error: [],
};

const fetchApiSlice = createSlice({
  name: "fetchAPI",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getApiData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getApiData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getApiData.rejected, (state, action) => {
        state.data = [];
        state.error = action.payload;
        state.status = "error";
      });
  },
});

export const {} = fetchApiSlice.actions;
export default fetchApiSlice.reducer;

export const getApiData = createAsyncThunk(
  "fetchApi",
  async ({ url, authToken }) => {
    try {
      const headers = {};
      if (authToken) {
        headers["Authorization"] = `Bearer ${authToken}`;
      }
      const response = await fetch(url, { headers });
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
);
