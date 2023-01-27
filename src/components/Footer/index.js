import React from "react";
import Soldier from "assets/images/soldier.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a
          className="btn"
          href="https://media.tumblr.com/6939cf1e8bf0ad156b01fdef080ae731/tumblr_inline_mpj1imf1BZ1qz4rgp.gif"
          target={"_blank"}
        >
          ROAD TO HAPPINESS
        </a>
        <div className="footer__img">
          <img src={Soldier} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
