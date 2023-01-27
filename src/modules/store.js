import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import movieSlice from "../redux/movieSlice";

export default configureStore({
  reducer: {
    movies: movieSlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
