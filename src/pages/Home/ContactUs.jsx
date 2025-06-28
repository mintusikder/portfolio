import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUS = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Title Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
        <p className="text-gray-500 mt-2">
          Feel free to reach out for collaboration, questions, or just to say hi!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-white p-6 rounded-xl shadow"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center gap-6 bg-blue-50 p-6 rounded-xl shadow"
        >
          <div className="flex items-center gap-4 text-gray-700">
            <FaEnvelope className="text-2xl text-blue-600" />
            <span>yourname@example.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <FaPhone className="text-2xl text-blue-600" />
            <span>+8801XXXXXXXXX</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-2xl text-blue-600" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUS;
