import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb, SiExpress,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
  ];

  const tools = [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Responsive Design", icon: <MdDevices /> },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.07,
        type: "spring",
        stiffness: 120,
        damping: 16,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        custom={index}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={cardVariants}
        className="flex flex-col items-center gap-2 bg-[#037bae]/10 text-[#037bae] p-5 rounded-xl shadow hover:shadow-xl transition duration-300 ease-in-out"
      >
        <div className="text-5xl">{skill.icon}</div>
        <p className="font-semibold text-lg">{skill.name}</p>
      </motion.div>
    ));

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-10 text-[#037bae]"
        >
          My Skills
        </motion.h2>

        {/* Animated Tabs */}
        <motion.div
          className="flex justify-center gap-4 mb-14 flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {["frontend", "backend", "tools"].map((tab) => (
            <motion.button
              key={tab}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-200 ${
                activeTab === tab
                  ? "bg-[#037bae] text-white shadow-lg"
                  : "bg-gray-300 text-gray-700 hover:bg-[#037bae]/80 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Animated Skill Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {activeTab === "frontend" && renderSkills(frontendSkills)}
            {activeTab === "backend" && renderSkills(backendSkills)}
            {activeTab === "tools" && renderSkills(tools)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skill;
