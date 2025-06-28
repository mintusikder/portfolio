import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router"; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Brand Name */}
        <p className="text-2xl font-bold text-primary">Mintu Sikder</p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <NavLink
            to="/about"
            className="hover:text-primary transition font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className="hover:text-primary transition font-medium"
          >
            Project
          </NavLink>
          <NavLink
            to="/skill"
            className="hover:text-primary transition font-medium"
          >
            Skill
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-primary transition font-medium"
          >
            Contact Me
          </NavLink>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg text-gray-600">
          <a
            href="https://web.facebook.com/mintusikder15/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-primary transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/mintusikder/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/mintusikder"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/mintu_sikder_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-primary transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Mintu Sikder — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
