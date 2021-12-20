import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./components/CounterRedux/store";
// import { store } from "./components/PostWithThunk/store";
// import { store } from "./components/PostWithSaga/store";
// import { store } from "./components/CounterSaga/store";
// import { store } from "./components/CounterThunk/store";
// import { store } from "./components/DogImage/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
