import React, { useState } from "react";
import { motion } from "framer-motion";
import mintu from "../../assets/mintu.png";
import {
  FaCar,
  FaMusic,
  FaGamepad,
  FaBook,
  FaReact,
  FaNodeJs,
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      {/* Heading */}
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-6 text-[#037bae] text-center"
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

      {/* Content */}
      <div className="min-h-[200px]">
        {/* About Tab with Image */}
        {activeTab === "about" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto text-left"
          >
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
              <img
                src={mintu} // replace with your own image
                alt="Mintu Sikder"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-6">
                Hi! I’m{" "}
                <span className="text-[#037bae] font-bold">Mintu Sikder</span>,
                a passionate Junior Front-End Web Developer with a strong
                foundation in building interactive and responsive web interfaces
                using modern technologies like React.js, Next.js, and Tailwind
                CSS.
              </p>
              <p className="text-lg mb-6">
                I’ve worked on several real-world projects including{" "}
                <strong>EventSphere</strong>, a full-stack event booking
                platform. My goal is to continuously grow by learning from
                hands-on experiences, contributing to exciting projects, and
                collaborating with other developers.
              </p>
              <p className="text-lg mb-6">
                I love turning design ideas into clean and functional code, and
                I’m always curious about new tools and best practices in
                front-end development.
              </p>

              {/* Social Icons */}
              <div className="flex gap-6 mt-4 text-3xl text-[#037bae]">
                <FaGithub
                  title="GitHub"
                  className="hover:text-black cursor-pointer"
                />
                <FaLinkedin
                  title="LinkedIn"
                  className="hover:text-blue-700 cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#037bae]/10 text-[#037bae] text-center font-medium rounded-lg px-4 py-3 shadow-sm hover:scale-105 transition duration-300"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        )}

        {/* Hobbies Tab */}
        {activeTab === "hobbies" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 bg-[#037bae]/10 text-[#037bae] p-5 rounded-xl shadow text-center"
              >
                <div className="text-3xl">{hobby.icon}</div>
                <p className="font-medium">{hobby.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;
