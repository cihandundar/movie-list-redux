import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US`
      )
      .then((response) => setMovieData(response?.data));
  }, [id]);

  return (
    <div className="details">
      <div className="details__container">
        <div className="details__wrapper">
          <div className="details__img">
            <img
              src={IMG_API + movieData.poster_path}
              alt={movieData?.poster_path}
            />
          </div>
          <div className="details__text">
            <div className="details__col">
              <p>Movies</p>
              <h2>{movieData?.title}</h2>
            </div>
            <div className="details__col details__overview">
              <p>{movieData?.overview}</p>
            </div>
            <div className="details__col details__vote">
              <p style={{ color: "#99682c" }}>
                Rating: {movieData?.vote_average?.toFixed(1)}
              </p>
            </div>
            <div className="details__col">
              <p>Type</p>
              <span>Movie</span>
            </div>
            <div className="details__col">
              <p>Release Date:</p>
              <span>{movieData?.release_date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
