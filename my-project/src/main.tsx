import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { element } from "./Routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={element}></RouterProvider>
  </React.StrictMode>
);
