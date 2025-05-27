import "./Sidebar.css"

const Sidebar = ({ setActiveTab, activeTab }) => {
  return (
    <div className="sidebar">
      <button
        className={activeTab == "general" ? `active` : ""}
        onClick={() => setActiveTab("general")}
      >
        General
      </button>

      <button
        className={activeTab == "password" ? `active` : ""}
        onClick={() => setActiveTab("password")}
      >
        Change Password
      </button>

      <button
        className={activeTab == "socialLink" ? `active` : ""}
        onClick={() => setActiveTab("socialLink")}
      >
        Social Links
      </button>

      <button
        className={activeTab == "things" ? `active` : ""}
        onClick={() => setActiveTab("things")}
      >
        Some Other Things
      </button>
    </div>
  );
};

export default Sidebar;
