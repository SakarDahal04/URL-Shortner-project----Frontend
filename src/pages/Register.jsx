import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import "./../styles/Login.css"
import Button from "../components/Button/button";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPassword2, setRegisterPassword2] = useState("");

  const {registerUser} = useContext(AuthContext)

  const handleRegisterForm = (e) => {
    e.preventDefault();
    registerUser(registerEmail, registerUsername, registerPassword, registerPassword2)
  }

  return (
    <div className="login-container">
      <div className="form-box">
        <form className="login-form" onSubmit={handleRegisterForm}>
          <h1>Register</h1>
          <div className="input-box">
          <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
          <label htmlFor="name">Username:</label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              onChange={(e) => setRegisterUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
          <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
          <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
              onChange={(e) => setRegisterPassword2(e.target.value)}
              required
            />
          </div>
          <Button
              type="submit"
              content="Register"
              onClick={handleRegisterForm}
              style={{ backgroundColor: "black", color: "whitesmoke" }}
            />
        </form>
      </div>
    </div>
  );
};

export default Register;
