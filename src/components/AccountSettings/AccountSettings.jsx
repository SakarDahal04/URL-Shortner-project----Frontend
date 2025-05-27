import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./AccountSettings.css"
import GeneralTab from "./GeneralTab";
import ChangePasswordTab from "./ChangePasswordTab";

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="account-settings-container">
      <div className="account-header">
        <h2>Account Settings</h2>
      </div>
      <div className="account-settings">
        <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="content">
          {activeTab === "general" && <GeneralTab />}
          {activeTab === "password" && <ChangePasswordTab />}
          {/* {activeTab === "socialLink" && <SocialLinks />} */}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
