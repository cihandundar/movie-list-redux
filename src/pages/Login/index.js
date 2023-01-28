import React, { useState } from "react";
import Loginn from "assets/images/login.png";
import LoginItem from "components/LoginItem";
import RegisterItem from "components/RegisterItem";
const Login = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  const toggleRegister = () => {
    setRegister(!register);
  };

  if (login) {
    document.body.classList.add("active-login");
  } else {
    document.body.classList.remove("active-login");
  }
  if (register) {
    document.body.classList.add("active-register");
  } else {
    document.body.classList.remove("active-register");
  }
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__img">
          <img src={Loginn} alt="" />
          <div className="login__btn">
            <button onClick={toggleLogin} className="log">
              Login
            </button>
            <button onClick={toggleRegister} className="regis">
              Register
            </button>
          </div>
        </div>
        {login && (
          <div className="popup">
            <div className="popup__container"></div>
            <div className="popup__content">
              <LoginItem />
              <button className="popup__close" onClick={toggleLogin}>
                X
              </button>
            </div>
          </div>
        )}
        {register && (
          <div className="popup">
            <div className="popup__container"></div>
            <div className="popup__content">
              <RegisterItem />
              <button className="popup__close" onClick={toggleRegister}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
