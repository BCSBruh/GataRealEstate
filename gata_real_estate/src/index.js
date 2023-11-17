import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import House1 from "./pages/house1";
import House2 from "./pages/house2";
import Rent from "./pages/rent";
import Buy from "./pages/buy";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/house1",
    element: <House1 />,
  },
  {
    path: "/house2",
    element: <House2 />,
  },
  {
    path: "/rent",
    element: <Rent />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
