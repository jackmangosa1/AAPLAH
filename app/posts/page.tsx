"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Post } from "../types/types";
import { db, storage } from "../lib/firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

const page = () => {
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
          postsData.push({ ...data, imageUrl });
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
    <div className="flex flex-col gap-20 px-4 py-10 mt-16">
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col gap-10 mb-16">
          <div className="relative w-full h-[20rem] md:h-[25rem]">
            {post.imageUrl && (
              <Image
                src={post.imageUrl}
                alt="post-image"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            )}
            <div className="absolute bg-black bg-opacity-40 inset-0 rounded-2xl"></div>
            <div className="flex flex-col gap-4 absolute left-5 bottom-5 p-3 md:p-5 bg-black bg-opacity-60 rounded-xl w-[90%] md:w-auto">
              <div className="text-2xl md:text-4xl text-white font-bold">
                {post.title}
              </div>
              <div className="flex flex-wrap gap-2 md:gap-5 items-center text-white">
                <div className="bg-yellow px-3 py-1 w-fit text-darkText rounded-2xl text-xs md:text-base">
                  {post.category.toUpperCase()}
                </div>
                <div className="flex items-center gap-1 text-xs md:text-base">
                  <MdOutlineCalendarMonth className="text-lg md:text-xl" />
                  {new Date(post.createdAt.toDate()).toLocaleDateString(
                    "fr-FR",
                    {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 text-gray-700 text-base md:text-lg leading-relaxed px-2 md:px-5">
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
