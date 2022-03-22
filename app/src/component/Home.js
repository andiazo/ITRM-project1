import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { postsListAction } from "../store/slices/postsReducer";

export const Home = () => {
  let posts = useSelector((state) => state.posts);
  let dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(postsListAction())}>
        Obtener publicaciones
      </button>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
};
