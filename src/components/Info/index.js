import React from "react";
import Cinema from "assets/images/cinema.png";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__text">
          <h2>sign up for more</h2>
          <button className="btn">
            <Link to="/login">See All</Link>
          </button>
        </div>
        <div className="info__img">
          <img src={Cinema} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
