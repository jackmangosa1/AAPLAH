import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="lg:w-1/3 flex flex-col gap-5">
            <p className="font-bold text-xl">AAPLAH</p>
            <p className="text-darkText text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, itaque commodi voluptatum accusantium recusandae
              voluptatem neque quibusdam quam asperiores tenetur!
            </p>
            <div className="flex gap-2 text-darkText">
              {[FaInstagram, FaLinkedinIn, FaFacebookF].map((Icon, index) => (
                <div
                  key={index}
                  className="bg-yellow p-2 sm:p-3 rounded-full hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
                >
                  <Icon className="text-base sm:text-lg" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg sm:text-xl">Liens essentiels</p>
                <div className="flex flex-col gap-2 text-darkText">
                  {["Acceuil", "Projets", "Contacts"].map((item, index) => (
                    <p key={index} className="cursor-pointer hover:underline">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg sm:text-xl">
                  Horaire de travail
                </p>
                <div className="flex flex-col gap-2 text-darkText text-sm sm:text-base">
                  <p>Lundi - Vendredi: 9:00 - 17:00</p>
                  <p>Samedi 10:00 - 18: 00</p>
                  <p>Dimanche - Fermé</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg sm:text-xl">Adresses</p>
                <div className="flex flex-col gap-2 text-darkText text-sm sm:text-base">
                  <p>Beni, Matonge 25 AV KASAVUBU</p>
                  <p>Goma, Le Volcan 23</p>
                  <p>Kinshasa, La Gombe 45</p>
                </div>
              </div>
            </div>
            <hr className="border-slate-300" />
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 text-sm">
              <div className="flex flex-col sm:flex-row gap-4 text-darkText">
                <span className="cursor-pointer hover:underline">
                  Conditions d'utilisation
                </span>
                <span className="cursor-pointer hover:underline">
                  Politique de confidentialité
                </span>
              </div>
              <div className="text-darkText">
                Copyright © 2024 AAPLAH, Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
