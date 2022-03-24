import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { postsList, selectPosts } from './postsSlice'

const posts2 = [
    {id:1,title:'Post 1'},
    {id:2,title:'Post 2'},
    {id:3,title:'Post 3'},
]

export default function Home() {
    const { posts } = useSelector(selectPosts)
    console.log(useSelector(selectPosts))
    const dispatch = useDispatch()

    var pL = [];
    
    posts.forEach((post) => {
        pL.push(
            <div key={post.id}>{post.title}</div>
        );
    });

    //console.log(dispatch(postsList(posts2)))

    return(
        <>
            <button onClick={() => {console.log(posts);dispatch(postsList(posts2))}}>
                Obtener publicaciones
            </button>
            { pL? pL:'' }
        </>
    )
}