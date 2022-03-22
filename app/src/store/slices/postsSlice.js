import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    postsListAction: (state) => {
      state.posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" },
      ];
    },
  },
});

export const { postsListAction } = postsSlice.actions;

export default postsSlice.reducer;
