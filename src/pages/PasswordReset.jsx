import React, { useContext, useState } from "react";
import "./../styles/Login.css";
import Button from "../components/Button/button";
import AuthContext from "../context/AuthContext";

const PasswordReset = () => {
  const [userEmail, setUserEmail] = useState("");

    const {resetUserPasswordSendEmail} = useContext(AuthContext)

  const handleSendEmail = () => {
    resetUserPasswordSendEmail(userEmail)
  }

  return (
    <div className="login-container">
      <div className="form-box">
        <form className="login-form">
          <h1>Enter Your Email</h1>
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className="btn-container">
            <Button
              type="submit"
              content="Send Email"
              onClick={(e) => {
                e.preventDefault()
                handleSendEmail()
              }}
              style={{ backgroundColor: "black", color: "whitesmoke" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
