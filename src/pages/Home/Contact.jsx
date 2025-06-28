import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Title Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#037bae]">Get in Touch</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Feel free to reach out for collaboration, questions, or just to say hi!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-white p-8 rounded-xl shadow-md"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#037bae]/30"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#037bae]/30"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-[#037bae]/30"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#037bae] text-white px-6 py-2 rounded-md hover:bg-[#026598] transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center gap-6 bg-[#e7f5fd] p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-bold text-primary">Let’s Connect</h3>
          <p className="text-gray-600">
            I'm currently available for new projects. Feel free to send me a message
            — I’d love to hear from you!
          </p>

          <div className="flex items-center gap-4 text-gray-700">
            <FaEnvelope className="text-2xl text-primary" />
            <span>mintusikder15@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaPhone className="text-2xl text-primary" />
            <span>+8801 7154-73521</span>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-2xl text-primary" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
