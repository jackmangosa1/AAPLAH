"use client";

import React from "react";
import { PiStarFour } from "react-icons/pi";
import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "../assets/food-insecurity.jpg";
import Image2 from "../assets/harvesting.jpg";

export default function About() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 py-10 sm:py-16 md:py-20 px-4 sm:px-6">
      <section id="apropos" className="flex flex-col gap-16">
        <motion.div
          className="flex flex-col md:flex-row gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={Image1}
            alt="image-1"
            className="w-full md:w-1/2 h-80 object-cover rounded-3xl"
            placeholder="blur"
          />

          <div className="flex flex-col gap-5 justify-center md:w-1/2">
            <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-gray-600 rounded-2xl">
              <PiStarFour className="text-lg rotate-12" /> À propos
            </div>

            <motion.h2
              className="text-3xl md:text-6xl text-darkText font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contexte
            </motion.h2>

            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AGIR est une coopérative de développement communautaire créée en
              1993 à Manguredjipa (Nord-Kivu). Dans le but d&apos;accompagner
              les producteurs ruraux, de valoriser les ressources locales et de
              porter des projets agricoles intégrés au service des communautés.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={Image2}
            alt="image-2"
            className="w-full md:w-1/2 h-80 object-cover rounded-3xl"
            placeholder="blur"
          />

          <div className="flex flex-col gap-5 justify-center md:w-1/2">
            <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-gray-600 rounded-2xl">
              <PiStarFour className="text-lg rotate-12" /> À propos
            </div>

            <motion.h2
              className="text-3xl md:text-6xl text-darkText font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mission
            </motion.h2>

            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              AGIR a pour mission d&apos;améliorer les conditions de vie en
              milieu rural en promouvant une agriculture durable, la
              transformation locale des produits, la protection des ressources
              naturelles et le développement de l&apos;entrepreneuriat
              coopératif.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
