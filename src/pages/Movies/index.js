import React from "react";
import { useState } from "react";
import Loading from "assets/images/loading.gif";
import { MovieItem } from "components";
const Movies = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3500);
  return (
    <section className="container">
      {loading ? (
        <div className="container__loading">
          <img src={Loading} alt="" />
        </div>
      ) : (
        <div className="container__movie">
          <MovieItem />
        </div>
      )}
    </section>
  );
};

export default Movies;
