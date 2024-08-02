import { db, storage } from "../../lib/firebase/clientApp";
import { Timestamp, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import { Post } from "../../types/types"; // Adjust the path if necessary

async function getPost(id: string): Promise<Post | null> {
  try {
    const postDoc = await getDoc(doc(db, "posts", id));
    if (!postDoc.exists()) {
      console.error(`Post with ID ${id} does not exist.`);
      return null;
    }
    const postData = postDoc.data() as Post;
    let imageUrl: string | undefined;

    if (postData.imagePath) {
      try {
        const imageRef = ref(storage, postData.imagePath);
        imageUrl = await getDownloadURL(imageRef);
        console.log(`Image URL retrieved: ${imageUrl}`);
      } catch (error) {
        console.error(
          `Error getting image URL for path ${postData.imagePath}:`,
          error
        );
      }
    }

    return {
      ...postData,
      id: postDoc.id,
      imageUrl,
      createdAt:
        postData.createdAt instanceof Timestamp
          ? postData.createdAt
          : Timestamp.fromDate(postData.createdAt),
    };
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    return null;
  }
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    console.error(`Post with ID ${params.id} not found.`);
    return <div>Post not found</div>;
  }

  console.log(`Post data:`, post);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {post.title}
        </h1>
        {post.imageUrl ? (
          <div className="mb-4">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={800}
              height={600}
              className="w-full object-cover rounded-lg"
            />
          </div>
        ) : (
          <div>No image available</div>
        )}
        <div className="text-gray-700">{post.content}</div>
      </div>
    </div>
  );
}
