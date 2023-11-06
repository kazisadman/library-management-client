import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Routes/Root";
import Home from "./Pages/Home";
import Addbook from "./Pages/Addbook";
import Catagorybooks from "./Pages/Catagorybooks";
import Bookdetails from "./Pages/Bookdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addbook",
        element: <Addbook></Addbook>,
      },
      {
        path: "/:catagory",
        element: <Catagorybooks></Catagorybooks>,
        loader: () => fetch("/booksinfo.json"),
      },
      {
        path: "/:catagory/:id",
        element: <Bookdetails></Bookdetails>,
        loader: () => fetch("/booksinfo.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
