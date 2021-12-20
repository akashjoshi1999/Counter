import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./postAction";

const PostThunk = () => {
  const post = useSelector((state) => state.post.post);
  const dispatch = useDispatch();

  return (
    <>
      post data using redux thunk
      <button onClick={() => dispatch(getData())}>click</button>
      <tbody>
        {post &&
          post.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

export default PostThunk;
