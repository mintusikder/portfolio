import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">Mintu Sikder</h2>
          <p className="mt-2 text-gray-400">
            React Front-End Developer. Passionate about building user-friendly web apps.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Mintu Sikder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
