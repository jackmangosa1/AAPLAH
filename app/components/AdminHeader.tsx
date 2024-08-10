"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase/clientApp";
import Link from "next/link";

const AdminHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-20 fixed left-0 right-0 top-0 flex justify-between items-center p-4 sm:p-6 bg-white font-semibold w-full">
      <Link href="/admin">
        <span className="text-lg sm:text-xl">ADMIN PAGE</span>
      </Link>

      {/* Hamburger menu for mobile */}
      <button
        className="sm:hidden text-green"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Navigation for larger screens */}
      <nav
        className={`sm:flex gap-3 ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col sm:flex-row absolute sm:relative top-full sm:top-auto left-0 sm:left-auto right-0 sm:right-auto bg-white sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none`}
      >
        <button
          onClick={() => {
            router.push("/admin/");
            setIsMenuOpen(false);
          }}
          className="flex items-center justify-center gap-2 bg-transparent border border-green text-green px-4 py-2 rounded-lg w-full sm:w-auto mb-2 sm:mb-0"
        >
          View posts
        </button>
        <button
          onClick={() => {
            router.push("/admin/create-post");
            setIsMenuOpen(false);
          }}
          className="flex items-center justify-center gap-2 bg-transparent border border-green text-green px-4 py-2 rounded-lg w-full sm:w-auto mb-2 sm:mb-0"
        >
          Create post
        </button>
        <button
          onClick={() => {
            handleLogout();
            setIsMenuOpen(false);
          }}
          className="flex items-center justify-center gap-2 bg-transparent border border-green text-green px-4 py-2 rounded-lg w-full sm:w-auto"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default AdminHeader;
