import Navbar from "../Shared/Navbar";
import msLogo from "../../assets/image.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <div className="h-[555px] flex flex-col items-center justify-center px-4 text-center">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-md">
          <img
            src={msLogo}
            alt="Mintu Sikder"
            className="w-full h-full object-cover object-top scale-110"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-gray-800 mt-6">
          Hi, I’m Mintu Sikder
        </h1>

        {/* Description */}
        <p className="max-w-xl text-center mt-6 px-4">
          I’m a dedicated front-end developer with a strong eye for design and detail. I build fast, responsive, and visually appealing web apps using React, Next.js, and modern UI frameworks. My mission is to craft seamless and accessible user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a href="https://github.com/mintusikder" className="px-7 py-3 rounded bg-primary  text-white font-medium">
            Explore My Code
          </a>
          <Link to={"/contact"} className=" group px-7 py-2.5 flex items-center gap-2 font-medium">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
