const About = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">About Me</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <img
          src="https://i.ibb.co/YQyJr7B/mintu1.png" // replace with your own image
          alt="Mintu Sikder"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
        />

        {/* Bio */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Hi, I’m Mintu Sikder 👋</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’m a passionate front-end developer with a strong focus on clean design, responsive layouts, and intuitive user experiences. With a background in React and modern frameworks like Next.js and Tailwind CSS, I build interactive and fast-loading web applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I love turning complex ideas into elegant UI solutions. Whether it’s a landing page, a dashboard, or a full web app, I’m committed to writing scalable, maintainable code and always learning the latest technologies.
          </p>

          <a
            href="/resume.pdf" // replace with your own file
            className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
