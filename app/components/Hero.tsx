"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeroImage1 from "../assets/pexels-safari-consoler-3290243-11588032 (1).jpg";
import HeroImage2 from "../assets/hero-image-2.jpg";
import HeroImage3 from "../assets/a-woman-is-smiling-while-holding-a-basket-of-vegetables-ai-generative-photo-transformed.jpeg";
import HeroImage4 from "../assets/avicuture.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const [key, setKey] = useState(0);
  const heroData = [
    {
      id: 1,
      image: HeroImage1,
      bigText: "Lutter contre l'insécurité alimentaire",
      description:
        "AAPELAH soutient les ménages vulnérables de Beni en produisant et distribuant des semences de qualité. Ensemble, nous pouvons améliorer la sécurité alimentaire et construire un avenir durable.",
      callToAction: "En savoir plus",
    },
    {
      id: 2,
      image: HeroImage2,
      bigText: "Pisciculture pour un avenir meilleur",
      description:
        "Nous établissons des étangs piscicoles pour fournir une source durable de protéines et renforcer l'économie locale. Rejoignez-nous dans cette initiative vitale.",
      callToAction: "En savoir plus",
    },
    {
      id: 3,
      image: HeroImage4,
      bigText: "Promouvoir l'Aviculture Durable",
      description:
        "AAPELAH aide les ménages vulnérables à diversifier leurs sources de revenus en développant l'aviculture. Nous fournissons des poulaillers, des géniteurs de qualité, et des formations pour une production durable.",
      callToAction: "En savoir plus",
    },
    {
      id: 4,
      image: HeroImage3,
      bigText: "Stimuler l'économie locale",
      description:
        "Grâce à nos projets, nous aidons à créer des opportunités économiques et à réduire la pauvreté dans la région. Soutenez notre mission pour un impact durable.",
      callToAction: "En savoir plus",
    },
  ];

  return (
    <div className="z-0">
      <section id="acceuil">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={() => setKey((prev) => prev + 1)}
        >
          {heroData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-[30rem] sm:h-[40rem] md:h-[46rem]">
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={`hero-image${item.id}`}
                  priority
                />
                <div className="bg-black opacity-30 absolute inset-0"></div>
                <div
                  key={key}
                  className="absolute top-1/4 left-4 sm:left-6 flex flex-col gap-4 sm:gap-6 md:gap-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50rem] text-white animate-slideIn p-4 sm:p-0"
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
                    {item.bigText}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg">
                    {item.description}
                  </p>
                  <button className="bg-green text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg w-fit font-bold animate-slideUp text-sm sm:text-base">
                    {item.callToAction}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;
