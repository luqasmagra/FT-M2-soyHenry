import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/index";
// import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
