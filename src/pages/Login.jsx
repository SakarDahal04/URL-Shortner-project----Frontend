import React, { useContext } from "react";
import "./../styles/Login.css";
import { useState } from "react";
import AuthContext from "../context/AuthContext";
import Button from "../components/Button/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword, resetPassword] = useState("");

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLoginForm = (e) => {
    e.preventDefault();
    loginUser(loginEmail, loginPassword);
  };

  const handleResetPassword = () => {
    navigate("/password-reset")
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <form className="login-form" onSubmit={handleLoginForm}>
          <h1>Login</h1>
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          <div className="btn-container">
            <Button
              type="submit"
              content="Login"
              onClick={handleLoginForm}
              style={{ backgroundColor: "black", color: "whitesmoke" }}
            />
          </div>
          <div className="forgot-password">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleResetPassword();
              }}
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
