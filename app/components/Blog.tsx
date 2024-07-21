"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import TrainingImage from "../assets/training.jpg";
import { PiStarFour } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { SwiperRef } from "swiper/react";
import { Post } from "../types/types";
import { db, storage } from "../lib/firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { Timestamp } from "firebase/firestore";

export default function Blog() {
  const router = useRouter();
  const swiperRef = useRef<SwiperRef>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData: Post[] = [];
      for (const doc of querySnapshot.docs) {
        const data = doc.data() as Post;
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
          postsData.push(data);
        }
      }
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="px-6 py-10">
      <section id="blog">
        <div className="flex items-center gap-2 bg-white px-4 py-1 w-fit text-grayText rounded-2xl mb-10">
          <PiStarFour className="text-lg rotate-12" />
          Nos Actualités
        </div>
        <div className="flex justify-between items-center">
          <div className="text-6xl text-darkText font-bold mb-10">
            Posts et arcticles
          </div>

          <div className="flex gap-4">
            <button
              className="custom-swiper-button-prev p-3 border border-black h-fit rounded-md"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              <FaChevronLeft className="text-green text-lg" />
            </button>
            <button
              className="custom-swiper-button-next p-3 border border-black h-fit rounded-md"
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              <FaChevronRight className="text-green text-lg" />
            </button>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} onClick={() => router.push("/posts/")}>
              <div className="hover:cursor-pointer flex flex-col gap-5">
                <div className="relative ">
                  <div className="z-10 absolute top-5 left-5 bg-white px-4 py-1 w-fit text-grayText rounded-2xl mb-10">
                    {post.category.toLocaleUpperCase()}
                  </div>
                  <div className="group overflow-hidden rounded-2xl">
                    {post.imageUrl && (
                      <Image
                        src={post.imageUrl}
                        alt={`blog-image${post.id}`}
                        objectFit="cover"
                        layout="responsive"
                        width={300}
                        height={300}
                        className="transition-transform duration-200 ease-in-out transform group-hover:scale-110"
                      />
                    )}
                  </div>

                  <div className="absolute bottom-5 bg-yellow  right-2 p-3 rounded-full cursor-pointer ">
                    <HiArrowUpRight className="  text-green text-xl" />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-1 text-gray">
                    <MdOutlineCalendarMonth className="text-xl" />
                    {post.createdAt.toDate().toLocaleDateString().toUpperCase()}
                  </div>
                  <span className="text-3xl font-medium text-darkText">
                    {post.title}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
