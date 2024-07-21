"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase/clientApp";

const AdminHeader = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header className="z-10 fixed left-0 right-0 top-0 flex justify-between items-center p-6 bg-white font-semibold hover:cursor-pointer w-full">
      <span>ADMIN PAGE</span>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 bg-green text-white px-8 py-3 rounded-lg"
      >
        Logout
      </button>
    </header>
  );
};

export default AdminHeader;
