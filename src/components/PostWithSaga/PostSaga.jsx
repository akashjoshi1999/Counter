import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./postAction";

const PostSaga = () => {
  if (useSelector((state) => state.postReducer) === undefined) {
    return (
      <div>
        <a href="/">back</a>
      </div>
    );
  } else {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.postReducer.post);

    return (
      <>
        post data using redux saga
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
  }
};

export default PostSaga;
