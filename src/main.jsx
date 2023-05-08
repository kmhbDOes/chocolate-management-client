import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard.jsx";
import CoffeeDetails from "./components/CoffeeDetails/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoffeeCard></CoffeeCard>,
  },
  {
    path: "coffeedetails",
    element: <CoffeeDetails></CoffeeDetails>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
