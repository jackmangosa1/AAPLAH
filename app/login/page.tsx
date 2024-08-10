"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase/clientApp";
import { useRouter } from "next/navigation";

type formInput = {
  email: string;
  password: string;
};

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<formInput>({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // Keep this line as is

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      router.push("/admin");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        console.error("Login error:", error);
      } else {
        setError("An unknown error occurred.");
        console.error("Unknown error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-32">
      <span className="text-darkText text-4xl font-bold">Login</span>
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleInput(e)}
          className="border-2 border-grayLine py-2 px-5 rounded-md w-full focus:outline-none"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleInput(e)}
          className="border-2 border-grayLine py-2 px-5 rounded-md w-full focus:outline-none"
          placeholder="Password"
        />

        <button className="flex items-center justify-center gap-2 bg-green text-white font-bold px-8 py-3 rounded-lg w-full">
          Login
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Page;
