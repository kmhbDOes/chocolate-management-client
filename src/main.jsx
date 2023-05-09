import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard.jsx";
import CoffeeDetails from "./components/CoffeeDetails/CoffeeDetails";
import AddNew from "./components/AddNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoffeeCard></CoffeeCard>,
    loader: () => fetch("http://localhost:5000/chocolate"),
  },
  {
    path: "add-new",
    element: <AddNew></AddNew>,
  },
  {
    path: "coffee-details",
    element: <CoffeeDetails></CoffeeDetails>,
    loader: () => fetch(``),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
