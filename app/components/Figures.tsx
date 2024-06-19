"use client";
import React from "react";
import { PiStarFour } from "react-icons/pi";
import CountUp from "react-countup";

const Figures = () => {
  return (
    <div className="flex flex-col gap-10  py-20 px-6">
      <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-grayText rounded-2xl">
        <PiStarFour className="text-lg rotate-12" />
        Notre impact
      </div>
      <div className="text-6xl text-darkText font-bold">Les chiffres clés</div>
      <div className="flex justify-between">
        <div className="flex flex-col  gap-6 bg-yellow p-10 rounded-2xl w-[18rem]">
          <div className="flex items-start  text-6xl ">
            <span className="text-green font-bold text-5xl">*</span>
            <CountUp end={150} className="text-darkText font-bold" />
            <span className="-mt-1 -ml-1 text-4xl text-darkText font-bold">
              +
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <hr className="border-darkBorder" />

            <span className="text-grayText text-lg">Autochtones formés</span>
          </div>
        </div>
        <div className="flex flex-col  gap-6 bg-yellow p-10 rounded-2xl w-[18rem]">
          <div className="flex items-start  text-6xl ">
            <span className="text-green font-bold text-5xl">*</span>
            <CountUp end={453} className="text-darkText font-bold" />
            <span className="-mt-1 -ml-1 text-4xl text-darkText font-bold">
              +
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <hr className="border-darkBorder" />

            <span className="text-grayText text-lg">
              Autochtones bénéficaires
            </span>
          </div>
        </div>

        <div className="flex flex-col  gap-6 bg-yellow p-10 rounded-2xl w-[18rem]">
          <div className="flex items-start  text-6xl ">
            <span className="text-green font-bold text-5xl">*</span>
            <CountUp end={25} className="text-darkText font-bold" />
            <span className="-mt-1 -ml-1 text-4xl text-darkText font-bold">
              +
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <hr className="border-darkBorder" />

            <span className="text-grayText text-lg">Etangs piscicoles</span>
          </div>
        </div>

        <div className="flex flex-col  gap-6 bg-yellow p-10 rounded-2xl w-[18rem]">
          <div className="flex items-start  text-6xl ">
            <span className="text-green font-bold text-5xl">*</span>
            <CountUp end={10} className="text-darkText font-bold" />
            <span className="-mt-1 -ml-1 text-4xl text-darkText font-bold">
              +
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <hr className="border-darkBorder" />

            <span className="text-grayText text-lg">Tonnes de maïs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figures;
