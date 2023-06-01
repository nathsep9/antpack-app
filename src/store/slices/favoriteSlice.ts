import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../models/post";

export interface FavoriteSlice {
  posts: Record<number, Post | undefined>;
}
const initialState: FavoriteSlice = {
  posts: {},
};
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<Post>) => {
      state.posts[payload.id] = payload;
    },
    deleteFavorite: (state, { payload }: PayloadAction<number>) => {
      state.posts[payload] = undefined;
    },
  },
});

export const {addFavorite, deleteFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer;
