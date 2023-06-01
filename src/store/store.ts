import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import favoriteReducer from "./slices/favoriteSlice";

export const rootReducers = combineReducers({
  favorite: persistReducer(
    {
      key: "favorite",
      storage: storage,
    },
    favoriteReducer
  ),
});

export const store = configureStore({
  reducer: rootReducers,
});

export const storePersisted = persistStore(store);
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
