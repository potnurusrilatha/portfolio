import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center md:justify-start mt-6">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition"
      >
        <FaTwitter size={20} />
      </a>
    </div>
  );
};

export default SocialMedia;
