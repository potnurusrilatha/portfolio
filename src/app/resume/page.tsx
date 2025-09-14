"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Link from "next/link";
import { skills } from "@/data/Skills"

const Resume = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <section className="min-h-screen flex flex-col items-center bg-background px-6 md:px-20 py-10 mt-12">
      <Header />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl"
      >
        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          My Resume
        </h1>

        {/* Download Resume Button */}
        <div className="flex justify-end mb-8">
          <Link
            href="/SrilathaPotnuruResume.pdf"
            target="_blank"
            className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
          >
            Download My Resume
          </Link>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                Frontend Development Student
              </h3>
              <p className="text-gray-300">Currently Learning | 2024 - 2026</p>
              <p className="text-gray-400 text-sm">
                Focused on building modern, responsive, and user-friendly web
                applications using Next.js, React, and Tailwind.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                Master of Technology in Computer Science
              </h3>
              <p className="text-gray-300">JNT University | 2015</p>
              <p className="text-gray-400 text-sm">
                Strong foundation in programming, algorithms, and databases.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Accordion */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-6">Skills</h2>

          {skills.map((cat) => (
            <div key={cat.name} className="mb-4 border-b border-gray-700 pb-2">
              {/* Accordion Header */}
              <button
                onClick={() => toggleCategory(cat.name)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-white focus:outline-none"
              >
                {cat.name}
                <span className="text-green-400">
                  {openCategory === cat.name ? "▲" : "▼"}
                </span>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openCategory === cat.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {cat.items.map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md text-center"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
