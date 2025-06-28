import React, { useState } from "react";
import { motion } from "framer-motion";

const Project = () => {
  // Example categories; adjust based on your projects if needed
  const categories = ["All", "React", "MERN", "Tailwind"];

  const allProjects = [
    {
      title: "Event Explorer",
      image: "https://i.ibb.co/j4qybRZ/event-explorer.png",
      link: "https://eventexplorer.web.app",
      description:
        "A Firebase-authenticated event discovery app with protected routes and dynamic content.",
      category: "React",
    },
    {
      title: "Library Management System",
      image: "https://i.ibb.co/9NVDGzB/library.png",
      link: "https://library-system-client.web.app",
      description:
        "A full-stack MERN app for managing book borrow and return with user authentication.",
      category: "MERN",
    },
    {
      title: "Pet Station",
      image: "https://i.ibb.co/f8GB96F/pet-station.png",
      link: "https://mintusikder.github.io/tea-shop/",
      description:
        "A modern pet shop website using Tailwind CSS and daisyUI.",
      category: "Tailwind",
    },
  ];

  const [filter, setFilter] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section className="bg-white py-20 px-6 text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">My Portfolio</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Explore my projects. Click any project to learn more.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                filter === cat
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-white text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 px-6 py-2 rounded text-white font-semibold hover:bg-indigo-700 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
