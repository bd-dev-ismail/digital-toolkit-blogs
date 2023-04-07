import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../Loader/Loader";
import ReactDatePicker from "react-datepicker";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleAddBlog = (data) => {};
  return (
    <div>
      <section className="max-w-4xl lg:w-[80rem] p-6 mx-auto bg-purple-400 rounded-md shadow-md dark:bg-gray-800 mt-5">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Add Blogs
        </h1>
        <form onSubmit={handleSubmit(handleAddBlog)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username"
              >
                Product Name
              </label>
              <input
                {...register("productName", { required: true })}
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.productName && (
                <span className="mt-3 text-gray-800">
                  productName field is required
                </span>
              )}
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productPrice"
              >
                Originial Price
              </label>
              <input
                {...register("originalPrice", { required: true })}
                id="originalPrice"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.originalPrice && (
                <span className="mt-3 text-gray-800">
                  originalPrice field is required
                </span>
              )}
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="resalePrice"
              >
                Resale Price
              </label>
              <input
                {...register("resalePrice", { required: true })}
                id="resalePrice"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.resalePrice && (
                <span className="mt-3 text-gray-800">
                  resalePrice field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="email">
                Seller Email
              </label>
              <input
                {...register("sellerEmail", { required: true })}
                id="email"
                type="email"
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.sellerEmail && (
                <span className="mt-3 text-gray-800">
                  sellerEmail field is required
                </span>
              )}
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="sellerName"
              >
                Seller Name
              </label>
              <input
                {...register("sellerName", { required: true })}
                id="sellerName"
                disabled
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Location
              </label>
              <select
                {...register("location", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="Chattogram">Chattogram</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Kulna">Kulna</option>
                <option value="Syhlet">Syhlet</option>
                <option value="Barishal">Barishal</option>
                <option value="Noakhali">Noakhali</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {errors.location && (
              <span className="mt-3 text-gray-800">
                location field is required
              </span>
            )}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productConditon"
              >
                Product Condition
              </label>
              <select
                {...register("productConditon", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
              {errors.productConditon && (
                <span className="mt-3 text-gray-800">
                  productConditon field is required
                </span>
              )}
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="productCategory"
              >
                Product Category
              </label>
              {loading ? (
                <Loader />
              ) : (
                <>
                  <select
                    {...register("productCategoryId", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  >
                    {/* {categories.map((category) => (
                      <option key={category._id} value={category?._id}>
                        {category?.name}
                      </option>
                    ))} */}
                  </select>
                </>
              )}
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="yearOfPurchase"
              >
                Year Of Purchase
              </label>
              <select
                {...register("yearOfPurchase", { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
              {errors.yearOfPurchase && (
                <span className="mt-3 text-gray-800">
                  yearOfPurchase field is required
                </span>
              )}
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="yearOfPurchase"
              >
                Year Of Use
              </label>
              <select
                {...register("yearOfUse", { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
              {errors.yearOfUse && (
                <span className="mt-3 text-gray-800">
                  yearOfUse field is required
                </span>
              )}
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
          </div>
          <div className="my-3">
            <label className="block text-sm font-medium text-white">
              Product Image
            </label>
            <div className="space-y-1 text-center">
              <div>
                <input
                  {...register("productImage", { required: true })}
                  id="proudctImage"
                  type="file"
                  className="mt-1 text-white flex justify-center px-4 py-2 w-full border-2 border-gray-300 border-dashed rounded-md"
                />
                {errors.productImage && (
                  <span className="mt-3 text-gray-800">
                    productImage field is required
                  </span>
                )}
              </div>
            </div>
          </div>
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="desc">
              Product Description
            </label>
            <textarea
              {...register("productDesc", { required: true })}
              id="desc"
              type="textarea"
              className="block h-36 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            ></textarea>
            {errors.productDesc && (
              <span className="mt-3 text-gray-800">
                productDesc field is required
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
                value="Publish Product"
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
