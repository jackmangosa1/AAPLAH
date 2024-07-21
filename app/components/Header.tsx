import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-10 fixed left-0 right-0  top-0 flex justify-between items-center p-6 bg-white font-semibold hover:cursor-pointer w-full">
      <span>AAPLAH</span>
      <ul className="flex gap-10 ">
        <Link href="/#acceuil" className="hover:text-green">
          <li>Acceuil</li>
        </Link>
        <Link href="/#Apropos" className="hover:text-green">
          <li>A propos</li>
        </Link>

        <Link href="/#activités" className="hover:text-green">
          <li>Nos Activités</li>
        </Link>

        <Link href="/#blog" className="hover:text-green">
          <li>Posts et articles</li>
        </Link>
      </ul>

      <Link href="/#contacts" className="hover:text-green">
        <button className="flex items-center justify-center gap-2 bg-green text-white px-8 py-3 rounded-lg">
          <FiPhoneCall />
          Contactez-nous
        </button>
      </Link>
    </header>
  );
};

export default Header;
