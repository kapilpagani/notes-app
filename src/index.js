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
import ContactForm from "./ContactForm";

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
  {
    path: "/contact",
    element: <ContactForm />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
