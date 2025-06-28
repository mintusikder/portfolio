import React from 'react';

const Skill = () => {
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

  return (
    <div className="bg-gray-100 py-16 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Skills</h2>
        <p className="text-gray-600 mb-10">
          Here are the technologies and tools I use to build modern, responsive, and high-performance web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-4 rounded text-center hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
