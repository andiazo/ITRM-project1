export const postsList = () => {
    return {
        type:'POSTS_LIST',
        payload:[
            {id:1,title:'Post 1'},
            {id:2,title:'Post 2'},
            {id:3,title:'Post 3'},
        ]
    }
}