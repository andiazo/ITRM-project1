const initialState = [{id:9,title:'Initial Post'}]

export default function postsReducer(state=initialState, action) {
    switch(action.type){
        case 'POSTS_LIST':
            return [...state, ...action.payload]
        default:
            return state
    }
}