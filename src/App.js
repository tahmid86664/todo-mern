import React, { useContext } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// Switch -> Routes (in react-router-dom)
// Redirect -> Navigate
// component -> element

import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";

import { AppContext } from "./context/AppContext";

function App() {
  const { user } = useContext(AppContext);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={!user ? <Navigate to="/login" /> : <Home />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/user/:id/dashboard"
            element={!user ? <Navigate to="/login" /> : <Dashboard />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
