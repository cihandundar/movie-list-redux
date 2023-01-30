import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../redux/movieSlice";

const MovieItem = () => {
  const movies = useSelector((state) => state?.movies?.data);

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const [search, setSearch] = useState(``);
  // console.log(search);
  return (
    <div className="movie">
      <div className="movie__title">
        <div className="movie__title__container">
          <h1>Movies</h1>
          <div className="movie__input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="movie__container">
        {movies
          ?.filter((movie) => {
            return search.toLowerCase() === ``
              ? movie
              : movie.title.toLowerCase().includes(search);
          })
          ?.map((movie) => (
            <Link key={movie?.id} to={`/movie/${movie.id}`}>
              <div className="movie__card">
                <div className="movie__card__img">
                  <img src={IMG_API + movie?.poster_path} alt="" />
                </div>
                <div className="movie__card__title">
                  <h3>{movie?.title}</h3>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MovieItem;
