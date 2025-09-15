"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-background px-6 mt-12 md:px-20 py-10">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl"
      >
        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          About Me
        </h1>

        {/* Image + Text Column */}
        <div className="flex flex-col md:flex-row items-start gap-10 mb-12">
          {/* Profile Image */}
          <div className="relative w-60 h-60 rounded-xl overflow-hidden shadow-lg border-4 flex-shrink-0">
            <Image
              src="/sree.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Column */}
          <div className="flex-1 text-left">
            {/* Frontend Developer Intro */}
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              I am passionate about crafting engaging user experiences and turning innovative ideas into reality through code.
            </p>
            <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              My journey into web development has been fueled by curiosity and creativity. I love turning ideas into functional digital products and continuously learning new tools, frameworks, and best practices.
            </p>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Beyond coding, I enjoy solving problems, collaborating in teams, and contributing to projects that make a difference. I'm currently looking for opportunities like <span className="font-semibold text-yellow-400">LIA (Internship)</span> where I can apply my skills and grow as a developer.
            </p>

            {/* Strengths */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                🏆 My Top 5 Strengths
              </h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Strong teamwork abilities demonstrated through dynamic group projects</li>
                <li>Continuous learner with a passion for personal and professional growth</li>
                <li>Solid foundation in modern web technologies and frameworks</li>
                <li>Ability to adapt quickly to new technologies and development practices</li>
                <li>Adaptable and quick learner, always ready to tackle new challenges</li>
              </ul>
            </div>

            {/* Toolkit */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                🛠️ My Toolkit
              </h3>
              <p className="text-gray-200 mb-2">
                Git, HTML5, CSS, JavaScript, React.js, Tailwind CSS, Node.js, Next.js, TypeScript.
              </p>
              <p className="text-gray-200">
                Focused on mastering <span className="font-semibold">React</span>, but excited to explore Vue.js, Angular, and Svelte.
              </p>
            </div>

            {/* Personal Details */}
            <div className="mt-6 space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  🎂 Birthday
                </h3>
                <p className="text-gray-200">15 May 1990</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-400 mb-2">📍 City</h3>
                <p className="text-gray-200">Stockholm, Sweden</p>
              </div>
            </div>

            {/* Closing Paragraph */}
            <p className="text-lg text-gray-200 mb-6 mt-6 leading-relaxed">
              Exploring the great outdoors fuels my creativity and inspires my work. As I look to the future, I'm excited about opportunities where I can apply my skills, contribute to meaningful projects, and continue growing as a developer.
            </p>

            {/* Interests */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">
                🎯 Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Travel",
                  "Photography",
                  "Cycling",
                  "Cooking",
                  "Programming",
                ].map((interest, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
