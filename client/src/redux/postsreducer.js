import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getdata = createAsyncThunk("posts/getData", async () => {
  const res = await axios.get("https://server-1-zoux.onrender.com/api/post");
  return res.data;
});


export const addpost = createAsyncThunk("posts/addPost", async (post) => {
  const res = await axios.post(
    "https://server-1-zoux.onrender.com/api/post",
    post
  );
  return res.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getdata.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getdata.rejected, (state) => {
        state.error = "error fitshin data problem";
      });
  },
});

export default postsSlice.reducer;