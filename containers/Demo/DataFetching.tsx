import React, { useEffect, useState } from "react";
import { getPosts } from "api/demo";
import type { PostResponse } from "types/demo";
import classes from "./Demo.module.scss";

function DataFetching() {
  const [posts, setPosts] = useState<PostResponse[]>();

  const fetchAllPosts = async () => {
    const result = await getPosts();
    setPosts(result);
  };

  useEffect(() => {
    const fetchOnePosts = async () => {
      const result = await getPosts();
      setPosts([result[0]]);
    };

    if (!posts) fetchOnePosts();
  }, []);

  return (
    <div>
      <button onClick={fetchAllPosts} className={classes.button}>
        Get All Data
      </button>
      {posts?.map((post) => {
        return (
          <p key={post.id}>
            {post.id} - {post.body}
          </p>
        );
      })}
    </div>
  );
}

export default DataFetching;
