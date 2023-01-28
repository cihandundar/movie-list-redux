import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/movieSlice";

const MovieItem = () => {
  const movies = useSelector((state) => state?.movies?.data);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movie">
      <div className="movie__title">
        <h1>Movies</h1>
      </div>
      <div className="movie__container">
        {movies?.map((movie) => (
          <div className="movie__card" key={movie?.id}>
            <div className="movie__card__img">
              <img src={IMG_API + movie?.poster_path} alt="" />
            </div>
            <div className="movie__card__title">
              <h3>{movie?.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieItem;
