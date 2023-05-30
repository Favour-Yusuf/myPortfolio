import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../Components";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
