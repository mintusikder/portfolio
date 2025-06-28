import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPostman, // substitute for REST API icon
  SiFigma,
} from "react-icons/si";


const Skill = () => {
const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git & GitHub", icon: <SiGithub className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-900" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "REST API", icon: <SiPostman className="text-indigo-600" /> }, // replaced here
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Responsive Design", icon: <SiReact className="text-cyan-400" /> },
];


  return (
    <div className="bg-gray-100 py-16 px-6 text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">My Skills</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Here are the technologies and tools I use to build modern, responsive,
          and high-performance web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map(({ name, icon }, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 transform transition-transform cursor-pointer"
            >
              <div className="text-6xl">{icon}</div>
              <span className="text-lg font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
