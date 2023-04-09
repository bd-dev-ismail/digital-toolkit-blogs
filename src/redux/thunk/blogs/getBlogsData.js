import { getBlogs } from "../../actionCreators/blogActions";

export const getBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();
    if (data.data.length) {
      dispatch(getBlogs(data.data));
    }
  };
};
