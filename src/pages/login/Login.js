import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  // const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login__formContainer">
        <input
          type="email"
          className="loginInput"
          placeholder="Enter you email..."
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Enter you password..."
        />
        <button className="login__button">Log In</button>
        <span className="login__forgotPass">Forgot Password?</span>
        <Link to="/register" className="login__createNewAcc">
          Create a New Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
