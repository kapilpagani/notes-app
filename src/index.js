import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App2 from "./App2";
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SuccessForm from "./SuccessForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App2 />,
  },
  {
    path: "/success",
    element: <SuccessForm />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
