import React from "react";
import { PiStarFour } from "react-icons/pi";
import Image from "next/image";
import seedImage from "../assets/seeds.jpg";
import piscicultureImage from "../assets/pisciculture.jpg";
import marketGardeningImage from "../assets/marketGardening.jpg";
import avicultureImage from "../assets/aviculture.jpg";
import trainingImage from "../assets/training.jpg";
import { MdLightbulbOutline } from "react-icons/md";

const activitiesData = [
  {
    id: 1,
    image: seedImage,
    title: "Multiplication des semences",
    description:
      "AAPELAH multiplie des semences de qualité pour améliorer les rendements agricoles et assurer une production durable, fournissant aux agriculteurs les outils pour des récoltes abondantes.",
  },
  {
    id: 2,
    image: piscicultureImage,
    title: "Pisciculture",
    description:
      "Nous aidons les ménages à établir et à gérer des étangs pour l'élevage de poissons, contribuant ainsi à la sécurité alimentaire et à l'économie locale.",
  },
  {
    id: 3,
    image: marketGardeningImage,
    title: "Culture Maraîchère",
    description:
      "AAPELAH encourage la culture maraîchère en établissant des pépinières collectives et en fournissant des plantules aux agriculteurs.",
  },
  {
    id: 4,
    image: avicultureImage,
    title: "Aviculture",
    description:
      "Nous soutenons les familles vulnérables en développant l'aviculture, en fournissant des géniteurs de qualité et des formations sur la gestion des poulaillers.",
  },
  {
    id: 5,
    image: trainingImage,
    title: "Formation",
    description:
      "AAPELAH organise des formations pratiques pour renforcer les compétences des agriculteurs et des éleveurs sur les techniques agricoles modernes, la gestion de la pisciculture et de l'aviculture.",
  },
];

const Activities = () => {
  return (
    <section
      id="activités"
      className="bg-green flex flex-col gap-16 px-6 py-10 sm:py-16 md:py-20"
    >
      <div className="flex flex-col gap-6 items-start">
        <div className="flex items-center gap-2 bg-white px-4 py-2 text-grayText rounded-full text-sm">
          <PiStarFour className="text-lg rotate-12" />
          Nos activités
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
          Les solutions durables
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {activitiesData.map((activity, index) => (
          <div
            key={activity.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-48 sm:h-56 lg:h-64">
              <Image
                src={activity.image}
                alt={activity.title}
                layout="fill"
                objectFit="cover"
                quality={75}
                priority={index === 0}
                loading={index !== 0 ? "lazy" : undefined}
              />
            </div>
            <div className="p-6 relative h-64">
              <h3 className="text-xl font-semibold text-darkText mb-4">
                {activity.title}
              </h3>
              <p className="text-sm text-grayText mb-6">
                {activity.description}
              </p>
              <div className="absolute bottom-6 right-6">
                <div className="bg-yellow p-3 rounded-full">
                  <MdLightbulbOutline className="text-green text-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
