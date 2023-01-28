import React from "react";

const RegisterItem = () => {
  return (
    <div className="loginitem">
      <div className="loginitem__container">
        <div className="loginitem__title">
          <h3>Sign in to HD-Movies</h3>
        </div>
        <form className="loginitem__form">
          <div className="loginitem__input">
            <input type="name" placeholder="Name" />
          </div>
          <div className="loginitem__input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="loginitem__input">
            <input type="password" placeholder="Password" />
          </div>
          <button>Sign in</button>
        </form>
        <div className="loginitem__footer">
          <p>
            Already a member? <span>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterItem;
