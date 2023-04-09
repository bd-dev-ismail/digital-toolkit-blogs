import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../Loader/Loader";
import ReactDatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { addBlogsData } from "../../../redux/thunk/blogs/addBlogsData";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddBlog = (data) => {
    const blogData = {
      blogBanner: data.blogBanner,
      blogDesc: data.blogDesc,
      blogTitle: data.blogTitle,
      descImage: data.descImage,
      descTitle: data.descTitle,
      tag: data.tag,
      date: startDate,
    };
    console.log(blogData);
    dispatch(addBlogsData(blogData));
    reset();
  };
  return (
    <div>
      <section className="max-w-4xl    p-6 mx-auto bg-purple-400 rounded-md shadow-md dark:bg-gray-800 my-10 lg:mt-[5rem]">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Add Blogs
        </h1>
        <form onSubmit={handleSubmit(handleAddBlog)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="blogTitle"
              >
                Blog Title
              </label>
              <input
                {...register("blogTitle", { required: true })}
                id="blogTitle"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.blogTitle && (
                <span className="mt-3 text-gray-800">
                  blogTitle field is required
                </span>
              )}
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="blogBanner"
              >
                Blog Banner URL
              </label>
              <input
                {...register("blogBanner", { required: true })}
                id="blogBanner"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.blogBanner && (
                <span className="mt-3 text-gray-800">
                  blogBanner field is required
                </span>
              )}
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="tag">
                Blog Category
              </label>

              <select
                id="tag"
                {...register("tag", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="">Select Categories</option>
                <option value="Web Design">Web Design</option>
                <option value="Javascript">Javascript</option>
                <option value="CSS">CSS</option>
                <option value="Jquery">Jquery</option>
              </select>
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="date">
                Date
              </label>
              <div className="relative">
                <ReactDatePicker
                  className="py-2 border rounded-md w-full px-4"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                {/* <FaCalendarAlt className="absolute top-3 right-5" /> */}
              </div>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="descTitle"
              >
                Description Title
              </label>
              <input
                {...register("descTitle", { required: true })}
                id="descTitle"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.descTitle && (
                <span className="mt-3 text-gray-800">
                  descTitle field is required
                </span>
              )}
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="descImage"
              >
                Description Image
              </label>
              <input
                {...register("descImage", { required: true })}
                id="descImage"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.descImage && (
                <span className="mt-3 text-gray-800">
                  descImage field is required
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="text-white dark:text-gray-200" htmlFor="blogDesc">
              Blog Description
            </label>
            <textarea
              {...register("blogDesc", { required: true })}
              id="blogDesc"
              type="textarea"
              className="block h-36 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            ></textarea>
            {errors.blogDesc && (
              <span className="mt-3 text-gray-800">
                blogDesc field is required
              </span>
            )}
          </div>
          <p className="text-center mt-2 text-white font-semibold">
            Note: Make Sure You Fill-Up Every Filed!
          </p>
          <div className="flex justify-center mt-6">
            {loading ? (
              <Loader />
            ) : (
              <input
                type="submit"
                value="Publish Blog"
                className="btn btn-outline text-white"
              />
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBlog;
