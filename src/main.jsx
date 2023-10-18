import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/pages/Root";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,

    children: [
      { path: "/", element: <Home />, loader: () => fetch('http://localhost:5000/company') },

      { path: "/login", element: <Login /> },

      { path: "/register", element: <Register /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);