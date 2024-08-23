// 1. get data from input
// 2. make fetch and show spinner
// 3. get data and write to the store
// 4. hide spinner

// ----------------------------

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import usersReducer from "./users/users.reducer.js";

const reducer = combineReducers({
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
