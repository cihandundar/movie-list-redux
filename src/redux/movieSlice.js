import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  itemsContainer: [],
  loading: false,
  error: "",
};

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&page"
  );
  console.log(response.data.results);
  return response.data.results;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    filteredMovie: (state, action) => {
      state.data = state.itemsContainer.filter((item) =>
        item.name.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.itemsContainer = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching movies data";
    });
  },
});

export const { filteredMovie } = movieSlice.actions;
export default movieSlice.reducer;
