import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsReducer";

export default configureStore({
  reducer: postsReducer,
});