import React from "react";
import { PiStarFour } from "react-icons/pi";
import Image from "next/image";
import seedImage from "../assets/seeds.jpg";
import piscicultureImage from "../assets/pisciculture.jpg";
import marketGardeningImage from "../assets/marketGardening.jpg";
import avicultureImage from "../assets/aviculture.jpg";
import trainingImage from "../assets/training.jpg";
import { HiArrowUpRight } from "react-icons/hi2";

const activitiesData = [
  {
    id: 1,
    image: seedImage,
    title: "Multiplication des semences",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sit ipsum maiores fugiat nemo corporis.",
  },
  {
    id: 2,
    image: piscicultureImage,
    title: "Pisciculture",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sit ipsum maiores fugiat nemo corporis.",
  },
  {
    id: 3,
    image: marketGardeningImage,
    title: "Culture Maraîchère",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sit ipsum maiores fugiat nemo corporis.",
  },
  {
    id: 4,
    image: avicultureImage,
    title: "Aviculture ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sit ipsum maiores fugiat nemo corporis.",
  },
  {
    id: 5,
    image: trainingImage,
    title: "Formation",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sit ipsum maiores fugiat nemo corporis.",
  },
];

const Activities = () => {
  return (
    <div className="flex flex-col gap-10 px-6 py-20 bg-green">
      <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-grayText rounded-2xl">
        <PiStarFour className="text-lg rotate-12" />
        Nos activités
      </div>
      <div className="text-6xl text-white font-bold">
        Les solutions durables
      </div>

      <div className="flex gap-10 flex-wrap">
        {activitiesData.map((activity, index) => (
          <div
            key={index}
            className="relative group flex flex-col gap-5 bg-white p-5 rounded-2xl w-[25rem] hover:cursor-pointer clip-path-card"
          >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={activity.image}
                alt="activity-image"
                width={500}
                height={500}
                className="rounded-2xl w-full transition-transform duration-200 ease-in-out transform group-hover:scale-105"
              />
            </div>

            <p className="text-2xl text-darkText font-semibold">
              {activity.title}
            </p>
            <hr className="border-grayLine" />
            <p className="text-grayText">{activity.description}</p>
            <div className="mt-5">
              <div className="bg-yellow absolute bottom-2 right-2 p-4 rounded-full ">
                <HiArrowUpRight className="  text-green text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
