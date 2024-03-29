import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMoviesDetails } from "redux/movieSlice";

const MovieDetails = () => {
  const details = useSelector((state) => state?.movies?.details);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchMoviesDetails(id));
  }, [dispatch, id]);

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="details">
      <div className="details__container">
        <div className="details__wrapper">
          <div className="details__img">
            <img
              src={IMG_API + details.poster_path}
              alt={details?.poster_path}
            />
          </div>
          <div className="details__text">
            <div className="details__col">
              <p>Movies</p>
              <h2>{details?.title}</h2>
            </div>
            <div className="details__col details__overview">
              <p>{details?.overview}</p>
            </div>
            <div className="details__col details__vote">
              <p style={{ color: "#99682c" }}>
                Rating: {details?.vote_average?.toFixed(1)}
              </p>
            </div>
            <div className="details__col">
              <p>Type</p>
              <span>Movie</span>
            </div>
            <div className="details__col">
              <p>Release Date:</p>
              <span>{details?.release_date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
