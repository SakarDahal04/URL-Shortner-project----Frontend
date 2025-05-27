import React, { useContext, useState } from "react";
import "./GeneralTab.css";
import AuthContext from "../../context/AuthContext";

function ChangePasswordTab() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword1, setNewPassword1] = useState('')
  const [newPassword2, setNewPassword2] = useState('')

  const {changePasswordForAuthenticatedUser} = useContext(AuthContext)

  const handleAccountChangePasswordSubmit = async () => {
    await changePasswordForAuthenticatedUser(oldPassword, newPassword1, newPassword2)
    console.log("Password Changed")

  };

  const cancelAccountChangePasswordSubmit = (e) => {
    e.preventDefault()
    setOldPassword("")
    setNewPassword1("")
    setNewPassword2("")
  }

  return (
    <div className="changePasswordTabContent">
      <form className="generalTabForm">
        <label className="accountGeneralLabel" htmlFor="currentPassword">
          Current Password
        </label>
        <input
          type="password"
          name="old_password"
          id="currentPassword"
          className="accountGeneralInput"
          value = {oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <label className="accountGeneralLabel" htmlFor="password">
          New Password
        </label>
        <input
          type="password"
          name="new_password1"
          id="password"
          className="accountGeneralInput"
          value = {newPassword1}
          onChange={(e) => setNewPassword1(e.target.value)}
        />

        <label
          className="accountGeneralLabel"
          htmlFor="last_name"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="new_password2"
          id="password2"
          className="accountGeneralInput"
          value = {newPassword2}
          onChange={(e) => setNewPassword2(e.target.value)}
        />

        <div className="submitAccountGeneralForm">
          <button type="submit" onClick={(e) => {
            e.preventDefault();
            handleAccountChangePasswordSubmit()
          }}>
            Save Changes
          </button>
          <button onClick={cancelAccountChangePasswordSubmit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePasswordTab;
