import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          setStatusMessage("🎉 Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatusMessage(""), 5000); // clear message after 5s
        },
        (error) => {
          setStatusMessage("❌ Failed to send the message, please try again.");
          console.error(error.text);
          setTimeout(() => setStatusMessage(""), 5000);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-24 gap-12">
      {/* Left side: Form */}
      <div className="md:w-1/2 bg-white rounded-3xl shadow-lg p-10 max-w-xl w-full">
        <h2 className="text-4xl font-extrabold mb-6 text-indigo-700">Get in Touch</h2>
        <p className="mb-8 text-gray-600 leading-relaxed">
          Have a question or want to work together? Fill out the form below and I'll get back to you ASAP.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
        
            <input
              type="text"
              name="user_name"
              id="name"
              required
              placeholder="Your full name"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
     
            <input
              type="email"
              name="user_email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
        
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Brief topic"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
       
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

          {statusMessage && (
            <p className="mt-4 text-center text-lg font-semibold text-green-600">
              {statusMessage}
            </p>
          )}
        </form>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2 max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Contact illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ContactUs;
