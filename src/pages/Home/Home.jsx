import React from "react";
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import LearningJourney from "./LearningJourney";
import ContactUs from "./ContactUs";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <LearningJourney></LearningJourney>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
