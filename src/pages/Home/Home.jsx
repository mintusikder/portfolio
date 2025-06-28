import React from "react";
import About from "./About";
import Skill from "./Skill";

import Hero from "../Hero/Hero";
import Contact from "./Contact";
import Project from "./Project";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Skill></Skill>
      <Contact></Contact>
    </div>
  );
};

export default Home;
