"use client";
import React from "react";
import Image from "next/image";
import WFP from "../assets/icons8-wfp-480.png";
import DRC from "../assets/DRC.png";
import UN from "../assets/icons8-un-480.png";
import MC from "../assets/MC.png";
import { PiStarFour } from "react-icons/pi";
import { motion, Variants } from "framer-motion";

const partners = [
  { src: WFP, alt: "partner-1" },
  { src: DRC, alt: "partner-2" },
  { src: UN, alt: "partner-3" },
  { src: MC, alt: "partner-4" },
  { src: DRC, alt: "partner-5" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Partners: React.FC = () => {
  return (
    <motion.div
      className="py-10 sm:py-20 px-4 sm:px-6 flex flex-col gap-6 sm:gap-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.div
        className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-grayText rounded-2xl text-sm sm:text-base"
        variants={item}
      >
        <PiStarFour className="text-base sm:text-lg rotate-12" />
        Nos Partenaires
      </motion.div>

      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl text-darkText font-bold"
        variants={item}
      >
        Nos Partenaires
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center"
        variants={container}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="w-auto h-12 sm:h-16 md:h-20 flex items-center justify-center"
            variants={item}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={160}
              height={80}
              className="w-auto h-full object-contain"
              loading="lazy"
              quality={75}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Partners;
