"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { db, storage } from "../../lib/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { Post } from "../../types/types";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import DOMPurify from "dompurify";


export default function PostPage() {
  const params = useParams();
  const id = params.id as string;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as Omit<Post, "id">;
          try {
            const imageRef = ref(storage, data.imagePath);
            const imageUrl = await getDownloadURL(imageRef);
            setPost({
              ...data,
              id: docSnap.id,
              imageUrl,
            });
          } catch (error) {
            console.error("Error getting image URL:", error);
            setPost({
              ...data,
              id: docSnap.id,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return null;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <Link href="/#blog" className="flex items-center gap-2 text-green mb-6 ">
        <FaArrowLeft />
        Retourner au Blog
      </Link>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray">
        {post.title}
      </h1>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <MdOutlineCalendarMonth className="text-lg" />
        {post.createdAt.toDate().toLocaleDateString()}
      </div>
      {post.imageUrl && (
        <div className="mb-6 relative w-full h-[500px] max-h-[50vw]">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}
      <div className="mb-10 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-yellow px-2 sm:px-3 py-1 w-fit text-black rounded-2xl text-xs sm:text-sm">
        {post.category.toUpperCase()}
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
      />
    </div>
  );
}
