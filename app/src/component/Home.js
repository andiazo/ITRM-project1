import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsListAction } from "../store/slices/postsSlice";

export var Home = () => {
  var posts = useSelector((state) => state.posts);
  var dispatch = useDispatch();

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
