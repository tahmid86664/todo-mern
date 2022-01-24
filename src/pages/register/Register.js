import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="register__formContainer">
        <input
          type="text"
          className="register__input"
          placeholder="Enter you username..."
        />
        <input
          type="email"
          className="register__input"
          placeholder="Enter you email..."
        />
        <input
          type="password"
          className="register__input"
          placeholder="Enter you password..."
        />
        <input
          type="password"
          className="register__input"
          placeholder="Enter you password again..."
        />
        <button className="register__button">Register</button>
        <Link to="/login" className="register__login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
