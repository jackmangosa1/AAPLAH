"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { FaImage } from "react-icons/fa6";
import ProtectedRoute from "../components/ProtectedRoute";
import { db } from "../lib/firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import useAuth from "../lib/hooks/useAuth";
import { getStorage } from "firebase/storage";
import { Timestamp } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface FormData {
  title: string;
  category: string;
  content: string;
}

interface FormErrors {
  title?: string;
  category?: string;
  content?: string;
  image?: string;
}

const Admin = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    category: "",
    content: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const user = useAuth();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | string,
    field: keyof FormData
  ) => {
    if (typeof e === "string") {
      setFormData({ ...formData, [field]: e });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
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

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!image) newErrors.image = "Image is required";

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      if (!user) {
        console.error("User not authenticated");
        toast.error("User not authenticated");
        setLoading(false);
        return;
      }

      try {
        let imageUrl = "";
        if (image) {
          const storage = getStorage();
          const imageRef = ref(storage, `posts/${Date.now()}_${image.name}`);
          await uploadBytes(imageRef, image);
          imageUrl = await getDownloadURL(imageRef);
        }

        const postData = {
          title: formData.title,
          category: formData.category,
          content: formData.content,
          imageUrl,
          authorId: user.uid,
          createdAt: Timestamp.now(),
        };

        const docRef = await addDoc(collection(db, "posts"), postData);
        console.log("Post created with ID: ", docRef.id);

        toast.success("Post created successfully");

        setFormData({ title: "", category: "", content: "" });
        setImage(null);
        setImageName("");
      } catch (error) {
        console.error("Error creating post:", error);
        toast.error("Failed to create post. Please try again.");
      }

      setLoading(false);
    }
  };

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
            <span>Upload Image</span>
          </button>
          {imageName && <span>{imageName}</span>}
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
          {loading ? "Creating Post..." : "Create Post"}
        </button>
      </form>
      <Toaster />
    </ProtectedRoute>
  );
};

export default Admin;
