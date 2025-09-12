"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-background px-6 md:px-20 py-10"
    >
      {/* Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Srilatha Potnuru
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Wide-ranging{" "}
          <span className="underline decoration-green-700 decoration-2 font-semibold">
            Frontend Developer Student
          </span>{" "}
          with a strong Computer Science background, specializing in building modern, responsive, and user-friendly web applications.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start items-center space-x-6 mb-6 text-2xl text-green-800">
          <a
            href="https://github.com/potnurusrilatha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-green-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/srilatha-potnuru-229b80215/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray transition-colors text-white duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/srilatha.potnuru"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray transition-colors text-white duration-300"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            href="/"
            className="bg-blue-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors duration-300"
          >
            Home
          </Link>
          <a
            href="#projects"
            className="bg-blue-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors duration-300"
          >
            My Works
          </a>
          <a
            href="#about"
            className="bg-blue-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors duration-300"
          >
            About Me
          </a>
          <a
            href="#resume"
            className="bg-blue-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors duration-300"
          >
            Resume
          </a>
          <Link
            href="/contact"
            className="bg-blue-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </motion.div>

      {/* Profile Image + Motion Text Below */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 md:ml-10 flex flex-col items-center md:items-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full mb-4 shadow-lg border-4 border-secondary overflow-hidden">
          <Image
            src="/sree.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Highlighted Text */}
        <motion.div
          className="text-2xl md:text-2xl font-bold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          Looking for LIA(Internship)
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
