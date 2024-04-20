import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  data: [],
  error: [],
};

const postApiSlice = createSlice({
  name: "postAPI",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postApiData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postApiData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(postApiData.rejected, (state, action) => {
        state.data = [];
        state.error = action.payload;
        state.status = "error";
      });
  },
});

export const {} = postApiSlice.actions;
export default postApiSlice.reducer;

export const postApiData = createAsyncThunk(
  "postApi",
  async ({ url, grantType, clientId, clientSecret }) => {
    try {
      const headers = {};
      //   const bodyData = new URLSearchParams();
      //   if (contentType) {
      //   headers["content-type"] = "application/x-www-form-urlencoded";
      headers["Authorization"] =
        "Basic " +
        new Buffer.from(clientId + ":" + clientSecret).toString("base64");
      //   }
      //   if (grantType || clientId || clientSecret) {
      //     bodyData.append("grant_type", grantType);
      //     bodyData.append("client_id", clientId);
      //     bodyData.append("client_secret", clientSecret);
      //   }
      const response = await fetch(url, {
        method: "POST",
        headers,
        form: {
          //   code: "code",
          //   redirect_uri: "http://localhost:5173/home",
          grant_type: grantType,
        },
        json: true,
        // body: bodyData,
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
);
