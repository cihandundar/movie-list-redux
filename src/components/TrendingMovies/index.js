import TrendingItem from "components/TrendingItem";
import React from "react";

const TrendingMovies = () => {
  return (
    <div className="trending">
      <div className="trending__container">
        <div className="trending__title">
          <h2>Trending Movies</h2>
        </div>
        <div className="trending__wrapper">
          <TrendingItem />
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
