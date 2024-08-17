"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { PiStarFour } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Post } from "../types/types";
import { db, storage } from "../lib/firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Blog() {
  const router = useRouter();
  const swiperRef = useRef<SwiperRef>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData: Post[] = [];
      for (const doc of querySnapshot.docs) {
        const data = doc.data() as Omit<Post, "id">;

        try {
          const imageRef = ref(storage, data.imagePath);
          const imageUrl = await getDownloadURL(imageRef);
          postsData.push({
            ...data,
            id: doc.id,
            imageUrl,
          });
        } catch (error) {
          console.error("Error getting image URL:", error);
          postsData.push({
            ...data,
            id: doc.id,
          });
        }
      }
      setPosts(postsData);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const placeholders = Array.from({ length: 3 }).map((_, index) => (
    <SwiperSlide key={index}>
      <div className="hover:cursor-pointer flex flex-col gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-0">
        <div className="relative">
          <div className="z-10 absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-white px-2 sm:px-3 py-1 w-fit text-grayText rounded-2xl text-xs sm:text-sm">
            <Skeleton width={80} />
          </div>
          <div className="group overflow-hidden rounded-2xl">
            <Skeleton height={200} />
          </div>
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 p-2 sm:p-3 rounded-full cursor-pointer bg-yellow">
            <HiArrowUpRight className="text-green text-base sm:text-lg md:text-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <div className="flex items-center gap-1 text-gray text-xs sm:text-sm">
            <MdOutlineCalendarMonth className="text-base sm:text-lg" />
            <Skeleton width={100} />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-darkText">
            <Skeleton width={150} />
          </span>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <section id="blog" className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
      <div className="flex flex-col gap-6 items-start">
        <div className="flex items-center gap-2 bg-white px-4 py-2 text-grayText rounded-full text-sm">
          <PiStarFour className="text-lg rotate-12" />
          Nos Actualités
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-black font-bold">
          Posts et articles
        </h2>
      </div>
      <div className="flex flex-col  sm:flex-row justify-between  gap-4 mb-6 sm:mb-8 md:mb-10">
        <div className="flex gap-4 mt-6">
          <button
            className="custom-swiper-button-prev p-2 sm:p-3 border border-black h-fit rounded-md"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <FaChevronLeft className="text-green text-sm sm:text-base" />
          </button>
          <button
            className="custom-swiper-button-next p-2 sm:p-3 border border-black h-fit rounded-md"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <FaChevronRight className="text-green text-sm sm:text-base" />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={16}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {loading
          ? placeholders
          : posts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="hover:cursor-pointer flex flex-col gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-0">
                  <div className="relative">
                    <div className="z-10 absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-white px-2 sm:px-3 py-1 w-fit text-grayText rounded-2xl text-xs sm:text-sm">
                      {post.category.toUpperCase()}
                    </div>
                    <div className="group overflow-hidden rounded-2xl">
                      {post.imageUrl && (
                        <Image
                          src={post.imageUrl}
                          alt={`blog-image${post.id}`}
                          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-200 ease-in-out transform group-hover:scale-110"
                          width={300}
                          height={200}
                          priority={false}
                          quality={75}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          placeholder="blur"
                          blurDataURL={post.imageUrl}
                          onClick={() => router.push(`/posts/${post.id}`)}
                        />
                      )}
                    </div>
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 p-2 sm:p-3 rounded-full cursor-pointer bg-yellow">
                      <HiArrowUpRight className="text-green text-base sm:text-lg md:text-xl" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                    <div className="flex items-center gap-1 text-gray text-xs sm:text-sm">
                      <MdOutlineCalendarMonth className="text-base sm:text-lg" />
                      {post.createdAt
                        .toDate()
                        .toLocaleDateString()
                        .toUpperCase()}
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium text-darkText">
                      {post.title}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
}
