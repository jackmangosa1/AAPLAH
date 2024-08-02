import React from "react";
import Image from "next/image";
import greenBg from "../assets/green-bg.jpg";
import handIcon from "../assets/hand-holding-seedling-thin.svg";

const CallToAction = () => {
  return (
    <div className="px-4 sm:px-6 py-6 sm:py-10">
      <div className="relative w-full h-[24rem] sm:h-80">
        <Image
          src={greenBg}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-2xl w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="bg-yellow rounded-full p-3 sm:p-4 md:p-5 lg:p-6 mb-3 sm:mb-4 lg:mb-5">
            <Image
              src={handIcon}
              alt="hand-icon"
              height={30}
              width={30}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[55px] md:w-[55px]"
            />
          </div>
          <div className="text-center flex flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold mb-3 sm:mb-4 lg:mb-5">
            <p className="">Contribuez à notre mission</p>
            <p>en devenant notre partenaire maintenant</p>
          </div>
          <button className="bg-white text-gray-900 w-full sm:w-auto font-bold px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-4 rounded-lg shadow-md text-sm sm:text-base">
            Devenir partenaire
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
