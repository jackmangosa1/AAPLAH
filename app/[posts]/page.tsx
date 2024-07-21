"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PostImage from "../assets/training.jpg";
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
    <div className="flex flex-col gap-20 px-6 py-10 mt-16">
      {posts.map((post, index) => (
        <div key={index} className="relative w-full h-[25rem]">
          {post.imageUrl && (
            <Image
              src={post.imageUrl}
              alt="post-image"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          )}
          <div className="absolute bg-black bg-opacity-15 inset-0 rounded-2xl"></div>
          <div className="flex flex-col gap-10 absolute left-5 top-28">
            <div className="text-6xl text-white font-bold w-[50rem]">
              {post.title}
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-yellow px-4 py-1 w-fit text-darkText rounded-2xl mb-10">
                {post.category.toUpperCase()}
              </div>
              {/* <div className="flex items-center gap-1 text-white -mt-10">
                <MdOutlineCalendarMonth className="text-xl" />
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </div> */}
            </div>
          </div>
        </div>
      ))}

      {posts.map((post, index) => (
        <div key={index} className="flex flex-col gap-5 text-grayText">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
