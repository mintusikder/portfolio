import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SmartShelf",
    description:
      "A responsive and fully functional Library Management System built for a renowned school to manage books, borrowing, and returns efficiently.",
    image: "https://i.ibb.co/YBxsHLbS/library.png",
    technologies: ["React", "MongoDB", "Express", "Tailwind", "Firebase"],
    liveLink: "https://library-system-b602f.web.app/",
    clientLink: "https://github.com/mintusikder/library-client",
    serverLink: "https://github.com/mintusikder/library-server",
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-primary">My Projects</h2>
          <p className="text-gray-600">
            Here are some of the frontend projects I've built
            recently.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full object-contain max-h-[400px] bg-white"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-3 text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-blue-600 transition-colors"
                  >
                    🔗 Live Site
                  </a>
                  <a
                    href={project.clientLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    💻 Client Code
                  </a>
                  <a
                    href={project.serverLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    🛠 Server Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
