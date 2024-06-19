import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex  px-6 py-20">
      <div className="flex flex-1 flex-col gap-5 ">
        <p className="font-bold text-xl">AAPLAH</p>
        <p className="text-darkText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          itaque commodi voluptatum accusantium recusandae voluptatem neque
          quibusdam quam asperiores tenetur!
        </p>
        <div className="flex gap-2 text-darkText hover:cursor-pointer transition-transform  duration-200 ease-in-out">
          <div className="bg-yellow p-3 rounded-full hover:scale-105">
            <FaInstagram />
          </div>

          <div className="bg-yellow p-3 rounded-full hover:scale-105">
            <FaLinkedinIn />
          </div>

          <div className="bg-yellow p-3 rounded-full hover:scale-105">
            <FaFacebookF />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-8 flex-1 flex-grow-2">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-xl">Liens essentiels</p>
            <div className="flex flex-col gap-1 text-darkText hover:cursor-pointer">
              <p>Acceuil</p>
              <p>Projets</p>
              <p>Contacts</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <p className="font-bold text-xl ">Horaire de travail</p>
            <div className="flex flex-col gap-1 text-darkText">
              <p>Lundi - Vendredi: 9:00 - 17:00</p>
              <p>Samedi 10:00 - 18: 00</p>
              <p>Dimanche - Fermé</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-bold text-xl">Adresses</p>
            <div className="flex flex-col gap-1 text-darkText">
              <p>Beni, Matonge 25 AV KASAVUBU</p>
              <p>Goma, Le Volcan 23</p>
              <p>Kinshasa, La Gombe 45</p>
            </div>
          </div>
        </div>

        <hr className="border-slate-300" />

        <div className="flex justify-between">
          <div className="flex gap-5 text-darkText hover:cursor-pointer">
            <span>Conditions d'utilisation</span>
            <span>Politique de confidentialité</span>
          </div>

          <div className="text-darkText">
            Copyright © 2024 AAPLAH, Tous droits réservés.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
