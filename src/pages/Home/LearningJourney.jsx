const LearningJourney = () => {
  const milestones = [
    {
      year: "2021",
      title: "Started Learning Web Development",
      description:
        "Began with HTML, CSS, and JavaScript fundamentals through online tutorials and projects.",
    },
    {
      year: "2022",
      title: "Mastered React.js",
      description:
        "Built several React applications, learned hooks, state management, and routing.",
    },
    {
      year: "2023",
      title: "Explored Backend Development",
      description:
        "Learned Node.js, Express, and MongoDB to build full-stack applications.",
    },
    {
      year: "2024",
      title: "Dived Into Next.js & Tailwind CSS",
      description:
        "Started building performant and SEO-friendly React apps using Next.js and styled with Tailwind CSS.",
    },
    {
      year: "2025",
      title: "Continuing Growth & Real-World Projects",
      description:
        "Working on real projects, improving coding skills, and learning new technologies.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 text-gray-800 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My Learning Journey
      </h2>

      <div className="relative border-l-2 border-indigo-600 ml-6">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="mb-10 ml-6">
            {/* Circle */}
            <div className="absolute w-5 h-5 bg-indigo-600 rounded-full -left-3 top-2.5"></div>

            <h3 className="text-xl font-semibold text-indigo-700">{milestone.year}</h3>
            <h4 className="text-lg font-semibold mt-1">{milestone.title}</h4>
            <p className="text-gray-700 mt-2">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningJourney;
