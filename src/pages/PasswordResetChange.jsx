import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button/button";
import AuthContext from "../context/AuthContext";

const PasswordResetChange = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { uidb64, token } = useParams();
  const {resetUserPasswordChangePassword} = useContext(AuthContext)


  useEffect(() => {
    console.log(uidb64);
    console.log(token);
  }, [uidb64, token]);

  const handleChangePassword = () => {
    resetUserPasswordChangePassword(password, password2, uidb64, token)
  }

  return (
    <div className="login-container">
      <div className="form-box">
        <form className="login-form">
          <h1>Change Password</h1>
          <div className="input-box">
            <label htmlFor="email">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>
          <div className="btn-container">
            <Button
              type="submit"
              content="Send Email"
              onClick={(e) => {
                e.preventDefault();
                handleChangePassword();
              }}
              style={{ backgroundColor: "black", color: "whitesmoke" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetChange;
