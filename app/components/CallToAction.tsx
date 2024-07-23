import React from "react";
import Image from "next/image";
import greenBg from "../assets/green-bg.jpg";
import handIcon from "../assets/hand-holding-seedling-thin.svg";

const CallToAction = () => {
  return (
    <div className="px-4 sm:px-6 py-10">
      <div className="relative w-full h-[30rem] sm:h-80">
        <Image
          src={greenBg}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-2xl w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
        <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center sm:justify-between p-6 sm:p-10">
          <div className="bg-yellow rounded-full p-4 sm:p-6 mb-4 sm:mb-0">
            <Image
              src={handIcon}
              alt="hand-icon"
              height={40}
              width={40}
              className="sm:h-[55px] sm:w-[55px]"
            />
          </div>
          <div className="text-center sm:text-left sm:ml-6 md:ml-10 lg:ml-20 flex flex-col text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4 sm:mb-0">
            <p>Contribuez à notre mission</p>
            <p>en devenant notre partenaire maintenant</p>
          </div>
          <button className="bg-white text-gray-900 w-full sm:w-auto font-bold px-4 py-3 sm:px-7 sm:py-4 rounded-lg shadow-md text-sm sm:text-base">
            Devenir partenaire
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
