import React from "react";
import Image from "next/image";
import WFP from "../assets/icons8-wfp-480.png";
import DRC from "../assets/DRC.png";
import UN from "../assets/icons8-un-480.png";
import MC from "../assets/MC.png";
import { PiStarFour } from "react-icons/pi";

const Partners = () => {
  return (
    <div className="py-20 px-6 flex flex-col gap-10 ">
      <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-grayText rounded-2xl">
        <PiStarFour className="text-lg rotate-12" />
        Nos Partenaires
      </div>
      <div className="text-6xl text-darkText font-bold">Nos Partenaires</div>
      <div className="flex justify-between">
        <Image src={WFP} alt="partner-1" height={100} width={200} />
        <Image src={DRC} alt="partner-1" height={100} width={200} />
        <Image src={UN} alt="partner-1" height={100} width={200} />
        <Image src={MC} alt="partner-1" height={100} width={200} />
        <Image src={DRC} alt="partner-1" height={100} width={200} />
      </div>
    </div>
  );
};

export default Partners;
