"use client";
import React from "react";
import { PiStarFour } from "react-icons/pi";
import CountUp from "react-countup";

const Figures = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 py-10 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-1 w-fit text-grayText rounded-xl sm:rounded-2xl text-sm sm:text-base">
        <PiStarFour className="text-base sm:text-lg rotate-12" />
        Notre impact
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-darkText font-bold">
        Les chiffres clés
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { end: 150, label: "Autochtones formés" },
          { end: 453, label: "Autochtones bénéficaires" },
          { end: 25, label: "Etangs piscicoles" },
          { end: 10, label: "Tonnes de maïs" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 sm:gap-6 bg-yellow p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl"
          >
            <div className="flex items-start text-4xl sm:text-5xl md:text-6xl">
              <span className="text-green font-bold text-3xl sm:text-4xl md:text-5xl">
                *
              </span>
              <CountUp end={item.end} className="text-darkText font-bold" />
              <span className="-mt-1 -ml-1 text-2xl sm:text-3xl md:text-4xl text-darkText font-bold">
                +
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <hr className="border-darkBorder" />
              <span className="text-grayText text-base sm:text-lg">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Figures;
