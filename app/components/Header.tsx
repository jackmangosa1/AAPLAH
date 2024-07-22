"use client";
import React, { useState, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { href: "/#accueil", label: "Accueil" },
    { href: "/#apropos", label: "A propos" },
    { href: "/#activites", label: "Nos Activités" },
    { href: "/#blog", label: "Posts et articles" },
  ];

  return (
    <header className="z-10 fixed left-0 right-0 top-0 flex flex-wrap justify-between items-center p-6 bg-white font-semibold hover:cursor-pointer w-full shadow-md">
      <div className="flex justify-between items-center w-full md:w-auto">
        <span className="text-xl">AAPLAH</span>
        {isMobile && (
          <button
            className="text-xl focus:outline-none"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        )}
      </div>
      <nav
        className={`${
          isMobile ? (menuOpen ? "flex" : "hidden") : "flex"
        } flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-10 mb-4 md:mb-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-green-500">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#contacts" className="hover:text-green-500">
          <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg">
            <FiPhoneCall />
            Contactez-nous
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
