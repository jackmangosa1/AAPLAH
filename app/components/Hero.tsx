import React from "react";
import Image from "next/image";
import HeroImage from "../assets/hero-image.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative">
      <div className=" absolute top-0 left-0 w-full h-screen bg-black bg-opacity-20"></div>
      <Image src={HeroImage} alt="hero-image" className="w-full h-screen" />
      <div className="pl-6 absolute top-20 flex flex-col gap-10 text-white w-[50rem]">
        <div className="  flex flex-col   text-8xl font-bold">
          <span>Cultivating For A</span>
          <span>Better Future</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          praesentium? Iste doloremque tempora voluptate, nisi expedita quia
          illo, totam, sequi obcaecati tenetur soluta odit ab rem laudantium quo
          enim possimus ut! Tempore, voluptatem accusamus quas adipisci nulla
          fuga iure ab blanditiis cum illo doloremque id animi? Deleniti
          molestiae aliquam vero.
        </p>
        <button className="flex items-center gap-2 bg-green text-white px-8 py-3 rounded-lg w-fit font-bold">
          Learn more
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
