"use client";
import React from "react";
import Image from "next/image";
import greenBg from "../assets/green-bg.jpg";
import handIcon from "../assets/hand-holding-seedling-thin.svg";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();
  return (
    <div className="px-6 py-10">
      <div className="relative w-full h-80">
        <Image
          src={greenBg}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-2xl w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-6 lg:space-y-0 px-6 sm:px-10 py-10">
          <div className="bg-yellow rounded-full p-3 sm:p-6">
            <Image
              src={handIcon}
              alt="hand-icon"
              height={35}
              width={35}
              className="sm:h-55 sm:w-55"
            />
          </div>
          <div className="text-center lg:text-left lg:ml-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            <p>Contribuez à notre mission</p>
            <p>en devenant notre partenaire maintenant</p>
          </div>
          <button
            onClick={() => router.push("/#contacts")}
            className="bg-white text-gray-900 font-bold px-7 py-4 rounded-lg shadow-md max-w-full w-[18rem]"
          >
            Devenir partenaire
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
