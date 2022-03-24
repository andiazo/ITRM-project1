import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
	name: 'posts',
	initialState: [{id:9,title:'Initial Post'}],
	reducers: {
		postsList: (state, action) => {
			//console.log("here", action, [...state, ...action.payload]);
			//state = [...state, ...action.payload]
			state = [{id:9,title:'ASD Post'}]
		},
	},
})

// Action creators are generated for each case reducer function
export const { postsList } = postsSlice.actions

export const selectPosts = (state) => state

export default postsSlice.reducer