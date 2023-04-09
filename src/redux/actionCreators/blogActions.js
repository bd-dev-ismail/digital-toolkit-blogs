import { ADD_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes";

export const addblogs = (blogs) => {
  return {
    type: ADD_CONTENT,
    payload: blogs,
  };
};

export const getBlogs = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};
