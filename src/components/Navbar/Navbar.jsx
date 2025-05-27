import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../context/AuthContext";
import Button from "../Button/button";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
    navigate("/login");
  };

  const handleShowProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <nav className="navbar-content">
      {!user ? (
        <div className="navbar-logged-out">
          <div className="navbar-left">
            <Link to="/" className="title">
              URL Shortner
            </Link>
          </div>

          <div className="nav-right">
            <Button
              type="submit"
              content="Login"
              onClick={handleLogin}
              style={{ backgroundColor: "lightgreen", color: "white" }}
            />

            <Button
              type="submit"
              content="Register"
              onClick={handleRegister}
              style={{ backgroundColor: "lightgreen", color: "white" }}
            />
          </div>
        </div>
      ) : (
        <div className="navbar-logged-in">
          <div className="navbar-left">
            <Link to="/" className="title">
              URL Shortner
            </Link>
          </div>
          <div className="navbar-middle">
            <ul className="nav-items">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/urls">
                  Your URLs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <Button
              type="submit"
              content="Logout"
              onClick={handleLogout}
              style={{ backgroundColor: "lightgreen", color: "white" }}
            />

            <Button
              type="submit"
              content="Profile"
              onClick={handleShowProfile}
              style={{ backgroundColor: "lightgreen", color: "white" }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
