"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import caspaImage from "@/app/assets/training.jpg";
import {
  HiOutlineDocumentText,
  HiOutlineMap,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineArrowTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineArrowPath,
  HiOutlineArrowLeft,
} from "react-icons/hi2";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CaspaPage() {
  return (
    <main className="flex flex-col gap-0 bg-background text-grayText">
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={caspaImage}
            alt="CASPA – Centre Agro-Sylvo-Pastoral Pilote"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-50"
          />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-12 py-12 sm:py-16 text-white">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-lg mb-4"
          >
            CASPA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl font-semibold drop-shadow mb-2"
          >
            Centre Agro-Sylvo-Pastoral Pilote
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-yellow drop-shadow"
          >
            Manguredjipa, Nord-Kivu • 88 hectares
          </motion.p>
        </div>
      </section>

      <div className="bg-background">
        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-green bg-opacity-15 rounded-lg border border-green border-opacity-30"
                >
                  <HiOutlineDocumentText className="w-6 h-6 text-green" />
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-bold text-darkText">
                  Présentation générale
                </h2>
              </div>
              <p className="leading-relaxed text-lg">
                Le CASPA (Centre Agro-Sylvo-Pastoral Pilote) est le projet
                majeur porté par la coopérative AGIR. Implanté sur une
                concession de 88 hectares à Manguredjipa (Secteur des Bapère,
                Nord-Kivu), il est conçu comme un modèle intégré de production,
                de transformation, de formation et de protection
                environnementale.
              </p>
              <p className="leading-relaxed text-lg mt-4">
                Le CASPA se positionne comme une ferme-école moderne, un espace
                d&apos;innovation rurale et une vitrine de l&apos;agro-pastoralisme
                durable en RDC.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green bg-opacity-5 p-8 rounded-3xl border-2 border-green border-opacity-20"
            >
              <div className="rounded-2xl p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl font-bold text-green mb-2"
                >
                  88
                </motion.div>
                <p className="font-semibold text-darkText">Hectares</p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-16 h-1 bg-green mx-auto my-6 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl font-bold text-green mb-2"
                >
                  1993
                </motion.div>
                <p className="font-semibold text-darkText">Depuis</p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-16 h-1 bg-green mx-auto my-6 rounded-full"
                ></motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-4xl font-bold text-green mb-2"
                >
                  500+
                </motion.div>
                <p className="font-semibold text-darkText">Bénéficiaires</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-12"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-green bg-opacity-15 rounded-lg border border-green border-opacity-30"
            >
              <HiOutlineArrowTrendingUp className="w-6 h-6 text-green" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-darkText">
              Objectifs
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-green bg-opacity-5 rounded-3xl p-8 mb-8 border-2 border-green border-opacity-30"
          >
            <h3 className="text-xl font-bold text-green mb-4">
              Objectif global
            </h3>
            <p className="leading-relaxed text-lg text-darkText">
              Contribuer à la sécurité alimentaire, à la réduction de la
              pauvreté et à la protection de l&apos;environnement d&apos;ici 2030 à
              travers un modèle reproductible d&apos;agriculture intégrée.
            </p>
          </motion.div>

          <div>
            <motion.h3
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl font-semibold text-green mb-6"
            >
              Objectifs spécifiques
            </motion.h3>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                "Produire durablement des denrées agricoles et animales",
                "Transformer localement les produits pour créer de la valeur ajoutée",
                "Former les jeunes, femmes et organisations rurales",
                "Créer des emplois décents et stables",
                "Accompagner 500 ménages ruraux à l&apos;entrepreneuriat agro-pastoral",
                "Préserver les écosystèmes et restaurer les forêts",
              ].map((objective, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-background p-6 rounded-xl border-l-4 border-green shadow-sm hover:shadow-md transition-shadow border-opacity-60"
                >
                  <p className="text-darkText font-medium flex items-start gap-3">
                    <span className="text-green font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    {objective}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-12"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-green bg-opacity-15 rounded-lg border border-green border-opacity-30"
            >
              <HiOutlineMap className="w-6 h-6 text-green" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-darkText">
              Organisation du site
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Bloc A",
                area: "10 ha",
                description:
                  "Administration • Formation • Transformation • Expérimentation",
              },
              {
                title: "Bloc B",
                area: "20 ha",
                description: "Maraîchage • Petit élevage • Pépinières",
              },
              {
                title: "Bloc C",
                area: "20 ha",
                description: "Cultures vivrières • Cacao",
              },
              {
                title: "Bloc D",
                area: "30 ha",
                description: "Palmeraie • Élevage intégré",
              },
              {
                title: "Périphérie",
                area: "8 ha",
                description: "Sylviculture • Apiculture • Reboisement",
              },
            ].map((block, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="bg-background border-2 border-green border-opacity-30 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-opacity-100 transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-green">
                    {block.title}
                  </h3>
                  <p className="text-green font-semibold text-sm">
                    {block.area}
                  </p>
                </div>
                <p className="text-grayText">{block.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-12"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-green bg-opacity-15 rounded-lg border border-green border-opacity-30"
            >
              <HiOutlineBriefcase className="w-6 h-6 text-green" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-darkText">
              Filières de production
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-background p-8 rounded-2xl shadow-sm border border-grayLine"
            >
              <h3 className="text-xl font-semibold text-green mb-6">
                🌾 Cultures agricoles
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  "Riz",
                  "Manioc",
                  "Maïs",
                  "Arachide",
                  "Patate douce",
                  "Soja",
                  "Bananier plantain",
                  "Tomates",
                  "Oignons",
                  "Choux",
                  "Aubergines",
                  "Fruits",
                  "Palmiers à huile",
                  "Cacao",
                  "Café",
                ].map((crop) => (
                  <motion.div
                    key={crop}
                    variants={fadeIn}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                    }}
                    className="bg-green bg-opacity-5 px-4 py-3 rounded-lg text-grayText font-medium border border-green border-opacity-20"
                  >
                    {crop}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-background p-8 rounded-2xl shadow-sm border border-grayLine"
            >
              <h3 className="text-xl font-semibold text-green mb-6">
                🐄 Élevage et pisciculture
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  "Cobayes",
                  "Lapins",
                  "Volaille",
                  "Caprins & ovins",
                  "Porcs",
                  "Bovins",
                  "Apiculture",
                  "Pisciculture",
                ].map((animal) => (
                  <motion.div
                    key={animal}
                    variants={fadeIn}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                    }}
                    className="bg-green bg-opacity-5 px-4 py-3 rounded-lg text-grayText font-medium border border-green border-opacity-20"
                  >
                    {animal}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-green bg-opacity-15 rounded-lg border border-green border-opacity-30"
                >
                  <HiOutlineArrowTrendingUp className="w-6 h-6 text-green" />
                </motion.div>
                <h3 className="text-2xl font-bold text-darkText">
                  Transformation
                </h3>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Le CASPA valorise les produits agricoles et d&apos;élevage via des
                unités de transformation locales :
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {[
                  "Huiles (palme, arachide)",
                  "Farines et cossettes de manioc",
                  "Conserves et jus",
                  "Produits apicoles",
                  "Charcuterie et transformés",
                  "Artisanat rural",
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeIn}
                    className="flex items-start gap-3 text-grayText"
                  >
                    <span className="text-green font-bold mt-1">→</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-green bg-opacity-15 rounded-lg border border-green border-opacity-30"
                >
                  <HiOutlineAcademicCap className="w-6 h-6 text-green" />
                </motion.div>
                <h3 className="text-2xl font-bold text-darkText">Formation</h3>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                Le centre est un espace de transmission des compétences et
                d&apos;innovation :
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {[
                  "Écoles pratiques d&apos;agriculture et élevage",
                  "Formation aux techniques durables",
                  "Incubation de jeunes entrepreneurs ruraux",
                  "Ateliers agroforesterie",
                  "Gestion des ressources naturelles",
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeIn}
                    className="flex items-start gap-3 text-grayText"
                  >
                    <span className="text-green font-bold mt-1">•</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-12"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-green bg-opacity-15 rounded-lg border border-green border-opacity-30"
            >
              <HiOutlineGlobeAlt className="w-6 h-6 text-green" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-darkText">
              Impact & ODD
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                title: "📊 Impact Économique",
                items: [
                  "✓ +500 emplois directs",
                  "✓ Revenus pour 500 ménages",
                  "✓ Dynamisation des marchés ruraux",
                ],
              },
              {
                title: "👥 Impact Social",
                items: [
                  "✓ Sécurité alimentaire renforcée",
                  "✓ Formation des jeunes et femmes",
                  "✓ Stabilisation des familles rurales",
                ],
              },
              {
                title: "🌿 Impact Environnemental",
                items: [
                  "✓ Lutte contre la déforestation",
                  "✓ Reboisement et agroforesterie",
                  "✓ Protection des sols et eau",
                  "✓ Résilience climatique",
                ],
              },
            ].map((impact, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderLeftWidth: "8px" }}
                className="bg-background border-l-4 border-green p-8 rounded-xl transition-all"
              >
                <h4 className="font-bold text-green mb-4">{impact.title}</h4>
                <ul className="space-y-2 text-grayText">
                  {impact.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <div>
            <motion.h3
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl font-bold text-darkText mb-6"
            >
              Contribution aux ODD
            </motion.h3>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {[
                { num: "1", label: "Pas de pauvreté" },
                { num: "2", label: "Faim zéro" },
                { num: "8", label: "Travail décent" },
                { num: "12", label: "Production responsable" },
                { num: "13", label: "Climat" },
                { num: "15", label: "Vie terrestre" },
              ].map((odd) => (
                <motion.div
                  key={odd.num}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(34, 197, 94, 0.2)",
                  }}
                  className="bg-green bg-opacity-10 border border-green border-opacity-30 p-4 rounded-xl text-center transition-colors"
                >
                  <div className="text-2xl font-bold text-green mb-1">
                    ODD {odd.num}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-grayText">
                    {odd.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-6"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-green bg-opacity-15 rounded-lg border border-green border-opacity-30"
            >
              <HiOutlineArrowPath className="w-6 h-6 text-green" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-darkText">
              Perspectives de réplication
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-green bg-opacity-5 rounded-2xl p-8 border-2 border-green border-opacity-30"
          >
            <p className="text-lg leading-relaxed text-darkText">
              Le CASPA est conçu comme un modèle pilote à déployer dans d&apos;autres
              provinces, notamment à Kinshasa. Cette approche d&apos;agriculture
              intégrée et durable peut être adaptée à différents contextes pour
              maximiser l&apos;impact environnemental et socio-économique auprès des
              communautés rurales.
            </p>
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-20 text-center border-t border-grayLine">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-darkText mb-6"
          >
            Participez à la transformation rurale
          </motion.h2>
          <motion.p
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Rejoignez AGIR et soutenez le CASPA pour créer un impact durable
            dans le Nord-Kivu et au-delà.
          </motion.p>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#contacts"
                  className="inline-block bg-green hover:bg-green hover:bg-opacity-90 transition-all px-8 py-4 rounded-lg text-white font-semibold shadow-md"
                >
                  Nous contacter
                </Link>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#projets"
                  className="inline-flex items-center justify-center gap-2 bg-background border border-grayLine hover:border-green text-green hover:text-green transition-colors px-8 py-4 rounded-lg font-semibold"
                >
                  <HiOutlineArrowLeft className="w-5 h-5" />
                  Revenir aux projets
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
