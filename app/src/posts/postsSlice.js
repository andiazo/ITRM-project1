import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
	name: 'posts',
	initialState: [{id:9,title:'Initial Post'}],
	reducers: {
		POSTS_LIST: (state, action) => {
			state = [...state, ...action.payload]
		},
	},
})

// Action creators are generated for each case reducer function
export const { POSTS_LIST } = postsSlice.actions

export default postsSlice.reducer