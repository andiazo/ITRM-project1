export default function appReducer(state={},action) {
    switch(action.type){
        case 'POSTS_LIST':
            return {...state, postsList: action.payload}
        default:
            return state
    }
}