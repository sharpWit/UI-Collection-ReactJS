"use client";

import { useEffect } from "react";

import { getData, postData } from "@/utils/fetchAPIs";

type Post = { id: number; userId: number; title: string; body: string };

const names = ["Brian", "Paul", "Krug", "Halley"];

const body: Post = {
  userId: 66,
  id: 666,
  title: "Hello World",
  body: "fetch data",
};

function InterviewQs() {
  useEffect(() => {
    console.log("Component rendered successfully");
  }, []);

  const listName = names.map((name, i) => (
    <ul key={i}>
      <li>{name}</li>
    </ul>
  ));

  const handleGetPosts = async () => {
    try {
      const posts = await getData("https://jsonplaceholder.typicode.com/posts");
      console.log({ posts });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error occurred");
      }
    }
  };

  const handlePostPosts = async () => {
    try {
      const posts: Post = await postData(
        "https://jsonplaceholder.typicode.com/posts",
        body
      );
      console.log(posts.body);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        console.error(error);
      } else {
        console.error("Error is unknown!");
      }
    }
  };

  return (
    <section>
      <div>
        <button type="button" onClick={handleGetPosts}>
          Click
        </button>
      </div>
      <hr />
      <div>{listName}</div>
      <hr />
      <div>
        <button type="button" onClick={handlePostPosts}>
          Click
        </button>
      </div>
    </section>
  );
}
export default InterviewQs;
