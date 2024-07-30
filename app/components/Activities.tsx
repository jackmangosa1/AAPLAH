import React from "react";
import { PiStarFour } from "react-icons/pi";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import seedImage from "../assets/seeds.jpg";
import piscicultureImage from "../assets/pisciculture.jpg";
import marketGardeningImage from "../assets/marketGardening.jpg";
import avicultureImage from "../assets/aviculture.jpg";
import trainingImage from "../assets/training.jpg";

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
    <div className="flex justify-center px-6 py-20 bg-green">
      <section
        id="activités"
        className="flex flex-col gap-10 max-w-screen-lg mx-auto"
      >
        <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-grayText rounded-2xl mx-auto">
          <PiStarFour className="text-lg rotate-12" />
          Nos activités
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center">
          Les solutions durables
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {activitiesData.map((activity, index) => (
            <div
              key={activity.id}
              className="relative group flex flex-col gap-5 bg-white p-5 rounded-2xl w-full sm:w-[25rem] lg:w-[20rem] xl:w-[22rem] hover:cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  layout="responsive"
                  width={500}
                  height={500}
                  quality={75}
                  priority={index === 0}
                  loading={index !== 0 ? "lazy" : undefined}
                  className="rounded-2xl w-full transition-transform duration-200 ease-in-out transform group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                />
              </div>

              <p className="text-xl sm:text-2xl text-darkText font-semibold">
                {activity.title}
              </p>
              <hr className="border-grayLine" />
              <p className="text-sm sm:text-base text-grayText">
                {activity.description}
              </p>
              <div className="mt-5">
                <div className="bg-yellow absolute bottom-2 right-2 p-4 rounded-full">
                  <HiArrowUpRight className="text-green text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activities;
