import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ReadingHistory from "../components/ReadingHistory/ReadingHistory";
import AllBlogs from "../components/AllBlogs/AllBlogs";
import Dashboard from "../components/Dashboard/Dashboard";
import Main from "../layouts/Main";
import DashboardLayout from "../layouts/DashboardLayout";
import AddBlog from "../components/Dashboard/AddBlog/AddBlog";
import BlogList from "../components/Dashboard/BlogList/BlogList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <ReadingHistory />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/blogs-lit",
        element: <BlogList />,
      },
      {
        path: "/dashboard/add-blogs",
        element: <AddBlog />,
      },
    ],
  },
]);
