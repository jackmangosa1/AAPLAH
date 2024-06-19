import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white font-semibold hover:cursor-pointer w-full">
      <span>AAPLAH</span>
      <ul className="flex gap-10 ">
        <li>Home</li>
        <li>About us</li>
        <li>Projects</li>
        <li>News</li>
      </ul>
      <button className="flex items-center justify-center gap-2 bg-green text-white px-8 py-3 rounded-lg">
        <FiPhoneCall />
        Contact us
      </button>
    </header>
  );
};

export default Header;
