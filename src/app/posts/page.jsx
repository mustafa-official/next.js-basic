"use client";
import axios from "axios";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ubuntu = Ubuntu({ weight: ["400", "500", "700"], subsets: ["latin"] });

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const loadData = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={`${ubuntu.className} grid grid-cols-3 gap-5`}>
      {posts?.map((post) => (
        <div
          key={post?.id}
          className="p-4 border-2 mt-6 border-violet-500 rounded-md"
        >
          {/* <Image
            className="w-full"
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            width={500}
            height={400}
          /> */}
          <h2 className="text-2xl font-bold">{post?.title}</h2>
          <p className="mt-2">{post?.body}</p>
          <Link href={`/posts/${post?.id}`}>
            <button className="px-3 rounded-md py-1 bg-violet-500 text-white mt-3">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
