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
import Company from "./components/Company";
import ProductDtls from "./components/pages/ProductDtls";
import MyCart from "./components/pages/MyCart";
import Update from "./components/Update";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,

    children: [
      { path: "/", element: <Home />, loader: () => fetch('http://localhost:5000/brands') },

      { path: "/login", element: <Login /> },

      { path: "/register", element: <Register /> },

      { path: "/about", element: <About /> },

      { path: "/contact", element: <Contact /> },

      { path: "/add-product", element: <PrivateRoute><AddProduct /></PrivateRoute> },

      { path: "/company/:id", element: <Company />, loader: ({ params }) => fetch(`http://localhost:5000/company/${params.id}`) },

      { path: "/item/:id", element: <PrivateRoute><ProductDtls /></PrivateRoute>, loader: ({ params }) => fetch(`http://localhost:5000/item/${params.id}`) },

      { path: "/cart", element: <MyCart />, loader: () => fetch('http://localhost:5000/cart') },

      { path: "/update/:id", element: <Update />, loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`) },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></React.StrictMode>
);