import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import axios from "axios";
import Post from "./PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(" https://dummyjson.com/posts");
    setPosts(data.posts);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        padding: 5,
        justifyContent: "space-evenly",
        alignItems : "flex-start"
      }}
    >
      {posts.map((post, index) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.body}
          tags={post.tags}
          reactions={post.reactions}
        />
      ))}
    </Box>
  );
};

export default Posts;
