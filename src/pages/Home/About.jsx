import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mintu from "../../assets/mintu.png";
import {
  FaCar,
  FaMusic,
  FaGamepad,
  FaBook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Firebase",
    "Git & GitHub",
    "MongoDB",
    "Express.js",
    "Node.js",
    "REST API",
    "Figma",
    "Responsive Design",
  ];

  const hobbies = [
    { icon: <FaCar />, label: "Driving" },
    { icon: <FaMusic />, label: "Music" },
    { icon: <FaGamepad />, label: "Gaming" },
    { icon: <FaBook />, label: "Reading" },
  ];

  const fadeSlide = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-extrabold mb-6 text-primary text-center"
      >
        About Me
      </motion.h2>

      <p className="text-gray-600 max-w-2xl mx-auto text-center mb-10">
        I’m a passionate front-end developer who enjoys creating user-friendly,
        modern web interfaces with tools like React and Tailwind CSS.
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["about", "skills", "hobbies"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium transition duration-200 ${
              activeTab === tab
                ? "bg-[#037bae] text-white shadow"
                : "bg-gray-200 hover:bg-[#037bae]/10"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        {activeTab === "about" && (
          <motion.div
            key="about"
            {...fadeSlide}
            className="flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto text-left"
          >
            <div className="w-full md:w-1/3">
              <img
                src={mintu}
                alt="Mintu Sikder"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-lg mb-6">
                Hi! I’m Mintu Sikder a passionate Junior Front-End Web Developer
                with a strong foundation in building interactive and responsive
                web interfaces using modern technologies like React.js, Next.js,
                and Tailwind CSS.
              </p>
              <p className="text-lg mb-6">
                My goal is to continuously grow by learning from hands-on
                experiences, contributing to exciting projects, and
                collaborating with other developers.
              </p>
              <p className="text-lg mb-6">
                I love turning design ideas into clean and functional code, and
                I’m always curious about new tools and best practices in
                front-end development.
              </p>

              <div className="flex gap-6 mt-4 text-3xl text-[#037bae]">
                <a
                  href="https://github.com/mintusikder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    title="GitHub"
                    className="hover:text-black cursor-pointer transition"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mintusikder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    title="LinkedIn"
                    className="hover:text-blue-700 cursor-pointer transition"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "skills" && (
          <motion.div
            key="skills"
            {...fadeSlide}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className="bg-[#037bae]/10 text-[#037bae] text-center font-medium rounded-lg px-4 py-3 shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "hobbies" && (
          <motion.div
            key="hobbies"
            {...fadeSlide}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className="flex flex-col items-center justify-center gap-2 bg-[#037bae]/10 text-[#037bae] p-5 rounded-xl shadow text-center"
              >
                <div className="text-3xl">{hobby.icon}</div>
                <p className="font-medium">{hobby.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
