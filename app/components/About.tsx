import React from "react";
import { PiStarFour } from "react-icons/pi";
import Image from "next/image";
import Image1 from "../assets/food-insecurity.jpg";
import Image2 from "../assets/harvesting.jpg";

export default function About() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 py-10 sm:py-16 md:py-20 px-4 sm:px-6">
      <section id="apropos" className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-10">
          <Image
            src={Image1}
            alt="image-1"
            className="w-full md:w-1/2 h-80 object-cover rounded-3xl"
            placeholder="blur"
          />
          <div className="flex flex-col gap-5 justify-center md:w-1/2">
            <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-gray-600 rounded-2xl">
              <PiStarFour className="text-lg rotate-12" /> À propos
            </div>
            <div className="text-3xl md:text-6xl text-darkText font-bold">
              Contexte
            </div>
            <p className="text-gray-600">
              L&apos;association AAPELAH opère à Beni, dans l&apos;est de la
              République Démocratique du Congo, une région sévèrement affectée
              par les conflits armés et les incursions des groupes ADF Nalu,
              provoquant des déplacements massifs de population. La région subit
              également des crises sanitaires, comme les épidémies d&apos;Ebola
              et la pandémie de COVID-19, aggravant la vulnérabilité des
              habitants. La crise économique, accentuée par l&apos;abandon des
              activités agricoles, entraîne une pénurie alimentaire et une
              hausse des prix.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <Image
            src={Image2}
            alt="image-2"
            className="w-full md:w-1/2 h-80 object-cover rounded-3xl"
            placeholder="blur"
          />
          <div className="flex flex-col gap-5 justify-center md:w-1/2">
            <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-gray-600 rounded-2xl">
              <PiStarFour className="text-lg rotate-12" /> À propos
            </div>
            <div className="text-3xl md:text-6xl text-darkText font-bold">
              Mission
            </div>
            <p className="text-gray-600">
              La mission principale de l&apos;association AAPELAH est de lutter
              contre l&apos;insécurité alimentaire et de soutenir les ménages
              vulnérables à travers des projets de production agricole et
              piscicole. Elle vise à produire et distribuer des semences de
              qualité, à améliorer la sécurité alimentaire des ménages en
              renforçant leurs capacités agricoles, à promouvoir la pisciculture
              et l&apos;aviculture, et à encadrer les bénéficiaires par des
              formations pratiques.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
