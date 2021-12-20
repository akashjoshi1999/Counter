import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post/Post";
import User from "./components/User/User";
import PostReducer from "./components/PostReducer/PostReducer";
import CounterUseReducer from "./components/CounterReducer/CounterReducer";
import Counter from "./components/CounterRedux/Counter";
import PostThunk from "./components/PostWithThunk/PostThunk";
import PostSaga from "./components/PostWithSaga/PostSaga";
import CounterSaga from "./components/CounterSaga/CounterSaga";
import CounterThunk from "./components/CounterThunk/CounterThunk";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/postWithMiddle" element={<PostReducer />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counterReducer" element={<CounterUseReducer />} />
          <Route path="/postthunk" element={<PostThunk />} />
          <Route path="/postsaga" element={<PostSaga />} />
          <Route path="/countersaga" element={<CounterSaga />} />
          <Route path="/counterthunk" element={<CounterThunk />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
