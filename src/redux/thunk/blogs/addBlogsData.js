import { addblogs } from "../../actionCreators/blogActions";

export const addBlogsData = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(addblogs({ ...blog, _id: data.insertedId }));
    }
  };
};
// _id: data.insertedId;
