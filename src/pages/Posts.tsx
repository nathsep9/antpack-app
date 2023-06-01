import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { client } from "../client";
import { Post } from "../models/post";
import { PostCard } from "../components/PostCard";
import { Grid } from "@mui/material";
import { RootState } from "../store/store";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Posts = () => {
  const selected = useSelector((state: RootState) => state.favorite.selects);
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    client.get<Post[]>("/posts").then(({ data }) => {
      setPosts(data);
    });
  }, []);

  const availablePosts = useMemo(
    () => posts.filter((post) => !selected[post.id]),
    [posts, selected]
  );

  const favoritePosts = useMemo(
    () => posts.filter((post) => !!selected[post.id]),
    [posts, selected]
  );

  return (
    <Container>
      <Grid container spacing={2} alignContent={"stretch"} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h4">
            <FavoriteIcon sx={{ mr: 1 }} />
            Mis publicaciones favoritas <FavoriteIcon sx={{ ml: 1 }} />
          </Typography>
        </Grid>
        {favoritePosts.map((post) => (
          <Grid key={post.id} item xs={6}>
            <PostCard data={post} />
          </Grid>
        ))}
        {!favoritePosts.length && (
          <Grid item xs={12}>
            <Typography variant="h6" paragraph align="center">
              Agrega tus publicaciones favoritas
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={2} alignContent={"stretch"} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Publicaciones</Typography>
        </Grid>
        {availablePosts.map((post) => (
          <Grid key={post.id} item xs={6}>
            <PostCard data={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
