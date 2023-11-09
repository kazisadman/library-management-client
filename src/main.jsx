import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Routes/Root";
import Home from "./Pages/Home";
import Addbook from "./Pages/Addbook";
import Catagorybooks from "./Pages/Catagorybooks";
import Bookdetails from "./Pages/Bookdetails";
import Borrowbook from "./Pages/Borrowbook";
import Allbooks from "./Pages/Allbooks";
import Updatebook from "./Pages/Updatebook";
import Error from "./Pages/Error";
import Read from "./Pages/Read";
import Login from "./Pages/Login";
import Authcontext from "./Context/Authcontext";
import Register from "./Pages/Register";
import Priveteroute from "./Private/Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addbook",
        element: (
          <Priveteroute>
            <Addbook></Addbook>
          </Priveteroute>
        ),
      },
      {
        path: "/:catagory",
        element: (
          <Priveteroute>
            <Catagorybooks></Catagorybooks>
          </Priveteroute>
        ),
        loader: () => fetch("http://localhost:5000/booksinfo"),
      },
      {
        path: "/:catagory/:id",
        element: (
          <Priveteroute>
            <Bookdetails></Bookdetails>
          </Priveteroute>
        ),
        loader: () => fetch("http://localhost:5000/booksinfo"),
      },
      {
        path: "/:catagory/:id/read",
        element: <Read></Read>,
        loader: () => fetch("http://localhost:5000/booksinfo"),
      },
      {
        path: "/:email/borrowedbooks",
        element: (
          <Priveteroute>
            <Borrowbook></Borrowbook>
          </Priveteroute>
        ),
        loader: () => fetch("http://localhost:5000/borrowbook"),
      },
      {
        path: "/allbooks",
        element: (
          <Priveteroute>
            <Allbooks></Allbooks>
          </Priveteroute>
        ),
        loader: () => fetch("http://localhost:5000/booksinfo"),
      },
      {
        path: "/update/:id",
        element: <Updatebook></Updatebook>,
        loader: () => fetch("http://localhost:5000/booksinfo"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authcontext>
      <RouterProvider router={router}></RouterProvider>
    </Authcontext>
  </React.StrictMode>
);
