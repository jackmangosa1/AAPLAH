import React from "react";
import Image from "next/image";
import greenBg from "../assets/green-bg.jpg";
import handIcon from "../assets/hand-holding-seedling-thin.svg";

const CallToAction = () => {
  return (
    <div className="px-6 py-10">
      <div className="relative w-full h-80 ">
        <Image
          src={greenBg}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-2xl w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

        <div className="absolute top-20 px-10 flex items-center  justify-between">
          <div className="bg-yellow rounded-full p-6">
            <Image src={handIcon} alt="hand-icon" height={55} width={55} />
          </div>
          <div className="ml-20 flex flex-col text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            <p>Contribuez à notre mission</p>
            <p>en devenant notre partenaire maintenant</p>
          </div>
          <button className="bg-white text-gray-900 w-[18rem] font-bold px-7 py-4 rounded-lg shadow-md">
            Devenir partenaire
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
