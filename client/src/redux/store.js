import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsreducer";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});