import React from "react";
import { motion } from "framer-motion";
import libraryImg from "../../assets/library.png";
import gardenImg from "../../assets/garden.png";
import newsWeekImg from "../../assets/newsWeek.png";
const projects = [
  {
    title: "NewsWeek",
    description:
      "Full-stack news app with premium content, role-based access, and admin panel for managing posts and users. Features user authentication, protected routes, and dynamic content loading.",
    features: [
      "Premium content access via Stripe",
      "Admin panel for article/user management",
      "Publisher dashboard and trending articles",
      "Subscription plans with expiry handling",
    ],
    image: newsWeekImg,
    technologies: [
      "React",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind",
      "Firebase",
      "DaisyUI",
      "React Icons",
      "React Router",
    ],
    liveLink: "https://lit-news-d17f7.web.app/",
    clientLink: "https://github.com/mintusikder/news-week-client",
    serverLink: "https://github.com/mintusikder/library-server",
  },
  {
    title: "SmartShelf",
    description:
      "Built a web application for managing books, borrowing, and returns. Implemented user authentication, protected routes, user-based access, and dynamic book filtering. Enabled real-time updates to book availability and personalized user dashboards.",
    features: [
      "Real-time book availability tracking",
      "Borrow/return with confirmation modal",
      "User-based dashboard (student/teacher)",
      "Admin controls with update/delete",
    ],
    image: libraryImg,
    technologies: [
      "React",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind",
      "Firebase",
      "DaisyUI",
      "React Icons",
      "React Router",
    ],
    liveLink: "https://library-system-b602f.web.app/",
    clientLink: "https://github.com/mintusikder/library-client",
    serverLink: "https://github.com/mintusikder/library-server",
  },
  {
    title: "The Garden Glow",
    description:
      "Developed a responsive and interactive platform connecting gardening enthusiasts to share tips, explore expert gardeners, and access trending gardening advice. Features user authentication, dynamic content loading, and a clean, eco-friendly design focused on community engagement and sustainability.",
    features: [
      "User authentication with Firebase",
      "Create, update & delete gardening tips",
      "Trending tips and active gardener sections",
      "Responsive eco-friendly design",
    ],
    image: gardenImg,
    technologies: [
      "React",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind",
      "Firebase",
      "DaisyUI",
      "React Icons",
      "React Router",
    ],
    liveLink: "https://gardening-community.web.app/",
    clientLink: "https://github.com/mintusikder/gardening-client",
    serverLink: "https://github.com/mintusikder/gardening-server",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-primary">My Projects</h2>
          <p className="text-gray-600">
            Here are some of the frontend projects I've built recently.
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

                {project.features && project.features.length > 0 && (
                  <ul className="mb-4 list-disc list-inside text-sm text-gray-700">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}

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
