import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/pages/Root";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/Register";
import AddProduct from "./components/pages/AddProduct";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,

    children: [
      { path: "/", element: <Home />, loader: () => fetch('http://localhost:5000/company') },

      { path: "/login", element: <Login /> },

      { path: "/register", element: <Register /> },

      { path: "/add-product", element: <PrivateRoute><AddProduct /></PrivateRoute> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></React.StrictMode>
);