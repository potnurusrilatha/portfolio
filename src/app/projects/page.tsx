"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { website } from "@/data/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-background px-6 md:px-20 py-10 mt-16">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-10">My Works</h1>
        <p className="text-lg text-gray-200 mb-10">As a student at Future Games, all my projects are a reflection of my educational journey, each a work in progress awaiting review and improvement in alignment with my evolving skills.While some projects are still unfinished, I am dedicated to completing them. Therefore, you may notice that certain websites are only available on desktops as I work towards their completion and optimization.</p>
        <p className="text-lg text-gray-200 font-bold underline decoration-green-400 decoration-2 mb-10">
          Swipe through some of my projects 👇
        </p>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {website.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-800 rounded-xl p-4 shadow-lg flex flex-col items-center"
                whileHover={{ scale: 1.03 }}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Title */}
                <h2 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h2>

                {/* Languages */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="bg-green-700 text-white text-sm px-2 py-1 rounded"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Link Button */}
                <Link
                  href={project.link}
                  target="_blank"
                  className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors"
                >
                  View Project
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default ProjectsPage;
