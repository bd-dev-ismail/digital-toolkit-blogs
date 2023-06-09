import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const menu = (
    <>
      <li className="bg-purple-400 rounded-md text-white font-medium">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="bg-purple-400 rounded-md text-white font-medium">
        <Link to="/dashboard/blogs-lit">Blogs List</Link>
      </li>
      <li className="bg-purple-400 rounded-md text-white font-medium">
        <Link to="/dashboard/add-blogs">Add Blogs</Link>
      </li>
    </>
  );
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center mt-3 justify-start">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-purple-400 my-5 border-0 drawer-button lg:hidden"
          >
            Open Dashboard Item
          </label>
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 gap-4 w-80 bg-base-200 ">
            {/* <!-- Sidebar content here --> */}
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
