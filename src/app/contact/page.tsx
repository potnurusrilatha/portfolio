"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-6 md:px-20 py-20 flex flex-col items-center">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl flex flex-col gap-10"
      >
        {/* Title */}
        <h1 className="text-4xl font-bold text-white text-center">Contact Me</h1>

        {/* Intro */}
        <p className="text-gray-300 text-center">
          Iam always open to discussing new projects, creative ideas, or opportunities to collaborate. Lets connect!
        </p>

        {/* 4 Blocks Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {/* Address */}
          <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
             <h3 className="text-green-400 font-semibold mb-2">📍 Address</h3>
  <a
    href="https://www.google.com/maps/place/Stockholm,+Sweden"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-200 hover:text-green-400"
  >
    Stockholm, Sweden
  </a>
          </div>

          {/* Email */}
          <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
            <h3 className="text-green-400 font-semibold mb-2">📧 Email</h3>
            <a
              href="mailto:potnuru.srilatha1241@gmail.com"
              className="text-gray-200 hover:text-green-400 text-sm"
            >
              potnuru.srilatha1241@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
            <h3 className="text-green-400 font-semibold mb-2">📞 Phone</h3>
            <a
              href="tel:+46123456789"
              className="text-gray-200 hover:text-green-400"
            >
              +46 734986150
            </a>
          </div>

          {/* Social Media */}
          <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
            <h3 className="text-green-400 font-semibold mb-2">🌐 Social Media</h3>
            <div className="flex justify-center gap-4 text-2xl text-green-400 mt-2">
              <a
                href="https://github.com/potnurusrilatha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/srilatha-potnuru-229b80215/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/srilatha.potnuru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
