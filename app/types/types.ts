import { Timestamp } from "firebase/firestore";

export type Post = {
  id: string;
  title: string;
  category: string;
  content: string;
  imagePath: string;
  imageUrl: string;
  createdAt: Timestamp;
};
