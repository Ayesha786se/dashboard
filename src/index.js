import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashBoard from "./Pages/DashBoard";
import Advertising from "./Pages/Advertising";
import UserContact from "./Pages/UserContact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "advertising",
        element: <Advertising />,
      },
      {
        path: "usercontact",
        element: <UserContact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
