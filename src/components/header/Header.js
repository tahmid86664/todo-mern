import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

const Header = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="header">
      <h2>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          To Do
        </Link>
      </h2>
      <div className="account">
        {user ? (
          <>
            <Link to={`/user/${user.id}/dashboard`} className="userButton">
              {user.username.toUpperCase()}
            </Link>
            <span>Logout</span>
          </>
        ) : (
          <span>
            <Link to="/login">Login</Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
