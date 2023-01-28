import React from "react";
import Cinema from "assets/images/cinema.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__image">
            <img src={Cinema} alt="" />
          </div>
          <div className="hero__text">
            <div className="hero__title">
              <h1>HD-Movies</h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              dolor a neque perferendis officiis nulla. Magni at quisquam, ex
              laborum quia fugit corrupti expedita temporibus perspiciatis
              dignissimos totam enim alias unde earum, itaque molestias aut in,
              sequi eos. Cumque praesentium dolorem, totam natus eligendi saepe
              est error, maiores rem nobis beatae illo perferendis assumenda
              dolores excepturi fugiat deleniti consequuntur libero.
            </p>
            <button className="btn">
              <Link to="/movies">See All</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
