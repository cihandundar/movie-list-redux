import React from "react";
import Astro from "assets/images/astro.png";
const Error = () => {
  return (
    <div className="error">
      <div className="error__container">
        <div className="error__img">
          <img src={Astro} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Error;
