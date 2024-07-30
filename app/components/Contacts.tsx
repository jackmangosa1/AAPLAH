import React from "react";
import Image from "next/image";
import FormImage from "../assets/woman.jpeg";
import { PiStarFour } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";

const Contacts = () => {
  return (
    <section id="contacts" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src={FormImage}
              alt="form-image"
              className="rounded-2xl w-full h-auto object-cover object-center"
              width={600}
              height={400}
              quality={75}
              loading="lazy"
              sizes="(max-width: 600px) 100vw, 600px"
              placeholder="blur"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <div className="flex items-center gap-2 bg-shadow px-3 py-1 w-fit text-grayText rounded-2xl text-sm">
              <PiStarFour className="text-base rotate-12" />
              Nous contacter
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-darkText font-bold">
              Laisser nous un message
            </h2>
            <form className="flex flex-col gap-6 mt-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 border-grayLine py-2 px-4 rounded-md w-full focus:outline-none"
                  placeholder="Votre nom"
                />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="border-2 border-grayLine py-2 px-4 rounded-md w-full focus:outline-none"
                  placeholder="Numero de téléphone"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-2 border-grayLine py-2 px-4 rounded-md w-full focus:outline-none"
                  placeholder="Addresse Email"
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="border-2 border-grayLine py-2 px-4 rounded-md w-full focus:outline-none"
                  placeholder="Sujet"
                />
              </div>
              <textarea
                name="message"
                id="message"
                className="border-2 border-grayLine py-3 px-4 rounded-md focus:outline-none h-32"
                placeholder="Votre message"
              ></textarea>
              <button className="flex items-center justify-center gap-2 bg-green text-white font-bold px-8 py-3 rounded-full w-full sm:w-auto">
                Envoyer
                <SiMinutemailer className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
