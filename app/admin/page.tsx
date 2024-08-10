"use client";
import React, { useEffect, useState } from "react";
import { Post } from "../types/types";
import { db } from "../lib/firebase/clientApp";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Page = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData: Post[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Omit<Post, "id">;
          postsData.push({
            ...data,
            id: doc.id,
          });
        });
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "posts", id));
      setPosts(posts.filter((post) => post.id !== id));
      toast.success("Post deleted successfully!");
    } catch (error) {
      toast.error("Post not deleted!");
      console.error("Error deleting post:", error);
    }
  };

  const PostSkeleton = () => (
    <div className="flex flex-col bg-background p-4 sm:p-5 rounded-xl shadow-md">
      <div className="relative mb-3">
        <Skeleton height={192} className="rounded-lg" />
      </div>
      <Skeleton width={100} className="mb-2" />
      <Skeleton count={2} className="mb-3" />
      <div className="flex gap-2 mt-auto">
        <Skeleton width={80} height={36} />
        <Skeleton width={80} height={36} />
      </div>
    </div>
  );

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Manage Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => <PostSkeleton key={index} />)
          : posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col bg-background p-4 sm:p-5 rounded-xl shadow-md transition-shadow duration-300"
              >
                <div className="relative mb-3">
                  <div className="absolute top-2 left-2 bg-white px-2 py-1 text-base sm:text-sm text-grayText rounded-full">
                    {post.category.toUpperCase()}
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    {post.imageUrl && (
                      <Image
                        src={post.imageUrl}
                        alt={`blog-image-${post.id}`}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-200 ease-in-out transform hover:scale-105"
                        width={300}
                        height={200}
                        priority={false}
                        quality={75}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={post.imageUrl}
                      />
                    )}
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl font-medium text-darkText mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <div className="flex gap-2 mt-auto">
                  <button
                    className="flex-1 bg-green text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-300"
                    onClick={() => router.push(`admin/edit-post/${post.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="flex-1 bg-transparent border border-green text-green px-3 py-2 rounded-md text-sm font-medium hover:bg-green hover:text-white transition-colors duration-300"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </div>
      <Toaster />
    </div>
  );
};

export default Page;
