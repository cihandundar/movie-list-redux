import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.png";
const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Movies",
      path: "/Movies",
    },
    {
      id: 3,
      name: "Login / Register",
      path: "/login",
    },
  ];

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src={Logo} alt="" />
          <h2>HD-Movies</h2>
        </div>
        <ul className="nav__list">
          {links?.map((link) => (
            <li key={link?.id} className="nav__list__link">
              <Link to={link?.path}>{link?.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
