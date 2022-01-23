import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h2>To Do</h2>
      <div className="account">
        <span>Login</span>
        <span>Register</span>
      </div>
    </div>
  );
};

export default Header;
