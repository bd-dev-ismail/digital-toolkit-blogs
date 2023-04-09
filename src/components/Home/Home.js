import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsData } from "../../redux/thunk/blogs/getBlogsData";

const Home = () => {
  const blogs = useSelector((state) => state.blogs);
    console.log(blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsData());
  }, [dispatch]);
  return <div>Home</div>;
};

export default Home;
