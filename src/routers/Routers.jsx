import {
  createBrowserRouter,

} from "react-router";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);