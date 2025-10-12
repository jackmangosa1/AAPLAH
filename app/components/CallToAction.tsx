"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import greenBg from "../assets/green-bg.jpg";
import handIcon from "../assets/hand-holding-seedling-thin.svg";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  return (
    <div className="px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-80"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={greenBg}
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl w-full h-full"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-6 lg:space-y-0 px-6 sm:px-10 py-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
            className="bg-yellow rounded-full p-3 sm:p-6 cursor-pointer"
          >
            <Image
              src={handIcon}
              alt="hand-icon"
              height={35}
              width={35}
              className="sm:h-55 sm:w-55"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            className="text-center lg:text-left lg:ml-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              Contribuez à notre mission
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              en devenant notre partenaire!
            </motion.p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/#contacts")}
            className="bg-white text-gray-900 font-bold px-7 py-4 rounded-lg shadow-md max-w-full w-[18rem] relative overflow-hidden flex items-center justify-center"
          >
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative z-10">Devenir partenaire</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
