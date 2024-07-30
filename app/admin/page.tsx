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
import { htmlToText } from "../utils/htmlToText";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Admin = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");
  const user = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      console.error("User not authenticated");
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

      // Strip HTML tags from content
      const plainTextContent = htmlToText(content);

      const postData = {
        title,
        category,
        content: plainTextContent, // Save plain text content
        imageUrl,
        authorId: user.uid,
        createdAt: Timestamp.now(),
      };

      const docRef = await addDoc(collection(db, "posts"), postData);
      console.log("Post created with ID: ", docRef.id);

      // Clear form
      setTitle("");
      setCategory("");
      setContent("");
      setImage(null);
      setImageName("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };

  return (
    <ProtectedRoute>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-10 mt-20 px-6 py-10"
      >
        <div className="flex flex-col gap-1">
          <label className="text-darkText font-bold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border-2 border-grayLine py-2 px-5 rounded-md w-full focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-darkText font-bold">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="border-2 border-grayLine py-2 px-5 rounded-md w-full focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-darkText font-bold">Image</label>
          <input
            type="file"
            id="file-input"
            onChange={handleImageChange}
            required
            className="hidden"
          />
          <button
            type="button"
            className="flex items-center gap-2 border-2 border-grayLine py-2 px-5 rounded-md w-full text-darkText"
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <FaImage />
            <span>Upload Image</span>
          </button>
          {imageName && <span>{imageName}</span>}
        </div>
        <div className="flex flex-col gap-10 mt-20 px-6 py-10">
          <div className="flex flex-col gap-1">
            <label className="text-darkText font-bold">Content</label>
            <ReactQuill value={content} onChange={setContent} />
          </div>
        </div>
        <button
          className="flex items-center justify-center gap-2 bg-green text-white font-bold px-10 py-4 rounded-lg w-fit"
          type="submit"
        >
          Create Post
        </button>
      </form>
    </ProtectedRoute>
  );
};

export default Admin;
