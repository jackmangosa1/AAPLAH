import React from "react";
import Image from "next/image";
import WFP from "../assets/icons8-wfp-480.png";
import DRC from "../assets/DRC.png";
import UN from "../assets/icons8-un-480.png";
import MC from "../assets/MC.png";
import { PiStarFour } from "react-icons/pi";

const Partners = () => {
  return (
    <div className="py-10 sm:py-20 px-4 sm:px-6 flex flex-col gap-6 sm:gap-10">
      <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-grayText rounded-2xl text-sm sm:text-base">
        <PiStarFour className="text-base sm:text-lg rotate-12" />
        Nos Partenaires
      </div>
      <div className="text-4xl sm:text-5xl md:text-6xl text-darkText font-bold">
        Nos Partenaires
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        <Image
          src={WFP}
          alt="partner-1"
          height={80}
          width={160}
          className="w-auto h-12 sm:h-16 md:h-20"
        />
        <Image
          src={DRC}
          alt="partner-2"
          height={80}
          width={160}
          className="w-auto h-12 sm:h-16 md:h-20"
        />
        <Image
          src={UN}
          alt="partner-3"
          height={80}
          width={160}
          className="w-auto h-12 sm:h-16 md:h-20"
        />
        <Image
          src={MC}
          alt="partner-4"
          height={80}
          width={160}
          className="w-auto h-12 sm:h-16 md:h-20"
        />
        <Image
          src={DRC}
          alt="partner-5"
          height={80}
          width={160}
          className="w-auto h-12 sm:h-16 md:h-20"
        />
      </div>
    </div>
  );
};

export default Partners;
