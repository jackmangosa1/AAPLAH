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
              <Image
                src={item.image}
                objectFit="cover"
                objectPosition="right"
                alt={`hero-image${item.id}`}
                className="w-full h-[46rem]"
              />
              <div className="bg-black opacity-30 absolute inset-0"></div>
              <div
                key={key}
                className="absolute top-48 left-6 flex flex-col gap-10 w-[50rem] text-white animate-slideIn"
              >
                <h2 className="text-7xl font-bold">{item.bigText}</h2>
                <p>{item.description}</p>

                <button className="bg-green text-white px-8 py-3 rounded-lg w-fit font-bold animate-slideUp">
                  {item.callToAction}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;
