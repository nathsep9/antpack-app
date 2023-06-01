import { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import { client } from "../client";
import { Post } from "../models/post";
import { PostCard } from "../components/PostCard";
import { Grid } from "@mui/material";

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    client.get<Post[]>("/posts").then(({ data }) => {
      setPosts(data);
    });
  }, []);
  return (
    <Container>
      <Grid container spacing={2} alignContent={'stretch'}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={6}>
            <PostCard data={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
