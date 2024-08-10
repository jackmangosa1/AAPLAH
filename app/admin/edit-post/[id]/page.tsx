"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import { FaImage } from "react-icons/fa6";
import ProtectedRoute from "../../../components/ProtectedRoute";
import { db, storage } from "../../../lib/firebase/clientApp";
import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import useAuth from "../../../lib/hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { Post } from "../../../types/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface FormErrors {
  title?: string;
  category?: string;
  content?: string;
  image?: string;
}

const EditPostPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [formData, setFormData] = useState<Post | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const user = useAuth();

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as Omit<Post, "id">;
          setFormData({
            ...data,
            id: docSnap.id,
          });
          setImageName(data.imagePath.split("/").pop() || "");
        } else {
          console.error("Post not found");
          toast.error("Post not found");
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        toast.error("Error fetching post");
      }
    };

    fetchPost();
  }, [id, router]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | string,
    field: keyof Post
  ) => {
    if (formData) {
      if (typeof e === "string") {
        setFormData({ ...formData, [field]: e });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData?.title.trim()) newErrors.title = "Title is required";
    if (!formData?.category.trim()) newErrors.category = "Category is required";
    if (!formData?.content.trim()) newErrors.content = "Content is required";

    return newErrors;
  };

  const uploadImage = async () => {
    if (!image) return formData?.imageUrl || "";

    const imageRef = ref(storage, `posts/${Date.now()}_${image.name}`);
    await uploadBytes(imageRef, image);
    return await getDownloadURL(imageRef);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0 && formData) {
      setLoading(true);

      if (!user) {
        console.error("User not authenticated");
        toast.error("User not authenticated");
        setLoading(false);
        return;
      }

      try {
        const imageUrl = await uploadImage();

        const updatedPost = {
          ...formData,
          imageUrl,
          authorId: user.uid,
          updatedAt: Timestamp.now(),
        };

        const docRef = doc(db, "posts", id);
        await updateDoc(docRef, updatedPost);
        console.log("Post updated with ID: ", id);

        toast.success("Post updated successfully");
        router.push(`/admin/`);
      } catch (error) {
        console.error("Error updating post:", error);
        toast.error("Failed to update post. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  if (!formData) {
    return <p>Loading...</p>;
  }

  return (
    <ProtectedRoute>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-10  px-6 py-10"
      >
        <div className="flex flex-col gap-1">
          <label className="text-darkText font-bold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e, "title")}
            className={`border-2 ${
              errors.title ? "border-red-500" : "border-grayLine"
            } py-2 px-5 rounded-md w-full focus:outline-none`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-darkText font-bold">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={(e) => handleChange(e, "category")}
            className={`border-2 ${
              errors.category ? "border-red-500" : "border-grayLine"
            } py-2 px-5 rounded-md w-full focus:outline-none`}
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-darkText font-bold">Image</label>
          <input
            type="file"
            id="file-input"
            onChange={handleImageChange}
            className="hidden"
          />
          <button
            type="button"
            className={`flex items-center gap-2 border-2 ${
              errors.image ? "border-red-500" : "border-grayLine"
            } py-2 px-5 rounded-md w-full text-darkText`}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <FaImage />
            <span>{imageName || "Upload Image"}</span>
          </button>
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image}</p>
          )}
        </div>
        <div className="flex flex-col gap-10  py-10">
          <div className="flex flex-col gap-1">
            <label className="text-darkText font-bold">Content</label>
            <ReactQuill
              value={formData.content}
              onChange={(content) => handleChange(content, "content")}
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content}</p>
            )}
          </div>
        </div>
        <button
          className="flex items-center justify-center gap-2 bg-green text-white font-bold px-10 py-4 rounded-lg w-fit"
          type="submit"
          disabled={loading}
        >
          {loading ? "Updating Post..." : "Update Post"}
        </button>
      </form>
      <Toaster />
    </ProtectedRoute>
  );
};

export default EditPostPage;
