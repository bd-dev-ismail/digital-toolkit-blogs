import { createStore, applyMiddleware } from "redux";
import { blogReducer } from "./reducer/blogReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
export const store = createStore(
  blogReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
