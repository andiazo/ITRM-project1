import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { postsList } from './test'

export default function Home() {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    var pL = [];
    
    posts.forEach((post) => {
        pL.push(
            <div key={post.id}>{post.title}</div>
        );
    });

    console.log(dispatch(postsList()))

    return(
        <>
            <button onClick={() => dispatch(postsList())}>
                Obtener publicaciones
            </button>
            { pL? pL:'' }
        </>
    )
}