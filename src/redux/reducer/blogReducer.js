import { ADD_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes";

const initalState = { blogs: [] };
export const blogReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    default:
      return state;
  }
};
