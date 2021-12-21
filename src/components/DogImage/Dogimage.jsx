import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo.svg";

function DogImage() {
  if (useSelector((state) => state.reducer) === undefined) {
    return (
      <div>
        <a href="/">back</a>
      </div>
    );
  } else {
    const { fetching, dog, error } = useSelector((state) => state.reducer);
    const dispatch = useDispatch();

    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={() => dispatch({ type: "API_CALL_REQUEST" })}>
            Request a Dog
          </button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

export default DogImage;
