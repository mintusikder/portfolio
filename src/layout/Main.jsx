import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Hero from "../pages/Hero/Hero";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
