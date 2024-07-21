import React from "react";
import Image from "next/image";
import FormImage from "../assets/woman.jpeg";
import { PiStarFour } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";

const Contacts = () => {
  return (
    <section id="contacts">
      <div className="flex items-center gap-10 px-6 py-20  bg-white">
        <div>
          <Image
            src={FormImage}
            alt="form-image"
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 bg-shadow px-4 py-1 w-fit text-grayText rounded-2xl">
            <PiStarFour className="text-lg rotate-12" />
            Nous contacter
          </div>
          <div className="text-6xl text-darkText font-bold">
            Laisser nous un message
          </div>
          <form className=" flex flex-col gap-10 mt-10">
            <div className="flex gap-10">
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-grayLine py-2 px-5 rounded-md w-full focus:outline-none"
                placeholder="Votre nom"
              />
              <input
                type="tel"
                name=""
                id=""
                className="border-2 border-grayLine py-2 px-5 rounded-md w-full focus:outline-none"
                placeholder="Numero de téléphone"
              />
            </div>
            <div className="flex gap-10">
              <input
                type="email"
                name=""
                id=""
                className="border-2 border-grayLine py-2 px-5 rounded-md w-full focus:outline-none"
                placeholder="Addresse Email"
              />
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-grayLine py-2 px-5 rounded-md w-full focus:outline-none"
                placeholder="Sujet"
              />
            </div>
            <textarea
              name=""
              id=""
              className="border-2 border-grayLine  py-5 px-5  rounded-md focus:outline-none"
              placeholder="Votre message"
            ></textarea>
            <button className="flex items-center justify-center gap-2 bg-green text-white font-bold px-10 py-4 rounded-3xl w-fit">
              Envoyer
              <SiMinutemailer className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
