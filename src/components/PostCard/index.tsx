import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Post } from "../../models/post";
import { CardActions, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addFavorite } from "../../store/slices/favoriteSlice";
import { RootState } from "../../store/store";
import DeleteIcon from '@mui/icons-material/Delete';

interface PostCardProps {
  data: Post;
}
export function PostCard({ data }: PostCardProps) {
  const dispatch = useDispatch();
  const selected = useSelector(
    (state: RootState) => !!state.favorite.posts[data.id]
  );
  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.body}
        </Typography>
      </CardContent>
      <CardActions>
        {!selected && (
          <IconButton
            size="small"
            onClick={() => {
              dispatch(addFavorite(data));
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
        {
          selected &&  <IconButton
          size="small"
          onClick={() => {
            dispatch(addFavorite(data));
          }}
        >
          <DeleteIcon />
        </IconButton>
        }
      </CardActions>
    </Card>
  );
}
