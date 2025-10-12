"use client";
import React from "react";
import { PiStarFour } from "react-icons/pi";
import Image from "next/image";
import caspaImage from "../assets/training.jpg";
import { useRouter } from "next/navigation";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { motion, Variants } from "framer-motion";

const Projects: React.FC = () => {
  const router = useRouter();

  const projectCards = [
    {
      title: "CASPA – Centre Agro-Sylvo-Pastoral Pilote",
      description:
        "CASPA est le projet majeur porté par la coopérative AGIR. Implanté sur une concession de 88 hectares à Manguredjipa (Secteur des Bapère, Nord-Kivu), il est conçu comme un modèle intégré de production, de transformation, de formation et de protection environnementale. Le CASPA se positionne comme une ferme-école moderne, un espace d’innovation rurale et une vitrine de l’agro-pastoralisme durable en RDC.",
      image: caspaImage,
      link: "/projects/caspa",
      status: "active",
    },
  ];

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="projets"
      className="bg-green flex flex-col gap-20 px-6 py-10 sm:py-16 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.div className="flex flex-col gap-6 items-start" variants={item}>
        <div className="flex items-center gap-2 bg-white px-4 py-2 text-grayText rounded-full text-sm font-medium">
          <PiStarFour className="text-lg rotate-12" />
          Nos projets
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold max-w-3xl">
          Des solutions durables
        </h2>
      </motion.div>

      <motion.div className="flex flex-col gap-8" variants={item}>
        <div className="text-sm font-semibold text-white text-opacity-80 uppercase tracking-widest">
          Projet en cours
        </div>
        <motion.div className="flex flex-col gap-8" variants={container}>
          {projectCards.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
              variants={item}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={90}
                  priority
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <motion.button
                  onClick={() => router.push(project.link)}
                  className="flex items-center gap-2 bg-green hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 group/btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`En savoir plus sur ${project.title}`}
                >
                  En savoir plus
                  <HiOutlineArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
