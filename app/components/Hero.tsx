"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import HeroImage from "@/app/assets/harvesting.jpg";

const Hero = () => {
  const router = useRouter();

  return (
    <section
      id="accueil"
      className="relative w-full h-[30rem] sm:h-[40rem] md:h-[46rem] flex items-center justify-center text-white overflow-hidden"
    >
      <Image
        src={HeroImage}
        alt="AGIR - Coopérative Agro-Industrie Rurale"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center px-4 sm:px-8 z-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
        >
          <span className="text-[#53b353]">AGIR</span> – Coopérative
          Agro-Industrie Rurale depuis{" "}
          <span className="text-[#53b353]">1993</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-medium mb-8 text-gray-100"
        >
          Ensemble, nous développons une agriculture durable , créatrice
          d’emplois et respectueuse de la nature.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => router.push("/#about")}
            className="flex items-center gap-2 bg-green hover:bg-green-600 transition-colors px-6 py-3 rounded-lg font-semibold text-white shadow-md hover:shadow-lg"
          >
            <HiOutlineArrowNarrowRight className="w-5 h-5" />
            Découvrir AGIR
          </button>

          <button
            onClick={() => router.push("/projects/caspa")}
            className="bg-white/90 hover:bg-white text-green font-semibold transition-colors px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
          >
            🌿 Notre projet phare : CASPA
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
