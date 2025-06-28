import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Skill from "../pages/Home/Skill";
import Project from "../pages/Home/Project";
import Contact from "../pages/Home/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/skill",
        Component: Skill,
      },
      {
        path: "/project",
        Component: Project,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
