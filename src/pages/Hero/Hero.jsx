import Navbar from "../Shared/Navbar";
import msLogo from "../../assets/image.png";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-[555px] flex flex-col items-center justify-center px-4 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={msLogo}
            alt="Mintu Sikder"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl mt-6 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
             bg-clip-text text-transparent leading-tight tracking-tight"
        >
          <Typewriter
            words={["Hi, I’m Mintu Sikder"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mt-6 px-4 text-gray-600 text-lg"
        >
          I’m a dedicated front-end developer with a strong eye for design and
          detail. I build fast, responsive, and visually appealing web apps
          using React, Next.js, and modern UI frameworks. My mission is to craft
          seamless and accessible user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <a
            href="https://github.com/mintusikder"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
          >
            Explore My Code
          </a>
          <Link
            to={"/contact"}
            className="group px-7 py-3 rounded-lg border border-gray-400 flex items-center gap-2 font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Hire Me
            <svg
              className="group-hover:translate-x-1 transition pt-0.5"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
