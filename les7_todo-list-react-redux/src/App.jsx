import React from "react";
import { Provider } from "react-redux";
import TodoList from "./tasks/components/TodoList.jsx";
import store from "./store.js";

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider >
  );
};

export default App;
