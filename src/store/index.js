import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({});

const middleware = [thunk];

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
