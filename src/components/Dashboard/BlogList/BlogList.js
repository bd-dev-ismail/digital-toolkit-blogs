import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsData } from "../../../redux/thunk/blogs/getBlogsData";
import { format } from "date-fns";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  console.log(blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogsData());
  }, [dispatch]);
  return (
    <div className="max-w-4xl    p-6 mx-auto border-purple-400 border-4  rounded-lg shadow-md dark:bg-gray-800 my-10 lg:mt-[5rem]">
        <h3 className="mb-5 text-3xl font-semibold ">All Blogs</h3>
      <div className="overflow-x-auto  rounded-md">
        <table className="table w-full">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th className="bg-purple-400"></th>
              <th className="bg-purple-400">Bog Name</th>
              <th className="bg-purple-400">Publish Date</th>
              <th className="bg-purple-400"> Id</th>
              <th className="bg-purple-400"> Update </th>
              <th className="bg-purple-400">Delete</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, idx) => (
              <tr key={blog._id}>
                <th>{idx + 1}</th>
                <td>{blog.blogTitle.slice(0, 20)}...</td>
                <td>{format(new Date(blog.date), "PP")}</td>
                <td>{blog._id}</td>
                <td className="flex items-center gap-2 cursor-pointer">
                  Edit <FaEdit />
                </td>
                <td>
                  <MdDeleteForever className="text-3xl text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
