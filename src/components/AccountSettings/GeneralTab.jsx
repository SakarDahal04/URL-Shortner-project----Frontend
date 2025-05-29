import { useState, useEffect, useContext } from "react";
import { createAxiosInstance } from "./../../services/axiosConfig";
import AuthContext from "./../../context/AuthContext";
import "./GeneralTab.css";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const GeneralTab = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { authTokens, setAuthTokens, setUser, logoutUser } =
    useContext(AuthContext);

  const api = createAxiosInstance(
    authTokens,
    setAuthTokens,
    setUser,
    logoutUser
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/account/user-update/");
        const userDetails = response.data;

        setName(userDetails.name);
        setEmail(userDetails.email);

      } catch (error) {
        setError(error.response?.data?.message || "Failed to fetch user data");
      }
    };

    fetchUserData();
  }, []);

  

  // Handle form submission (image upload)
  const handleAccountGeneralSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);

    try {
      const response = await api.put("/account/user-update/", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Success:", response.data);
      Swal.fire({
        title: "Credentials Updated Successfully",
        icon: "success",
        toast: true,
        timer: 5000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle reset form and preview image
  const handleReset = () => {
    setName("");
    setEmail("");
  };

  return (
    <div className="tabContent">
      <form
        className= "generalTabForm"
        onSubmit={handleAccountGeneralSubmit}
      >
        <label className= "accountGeneralLabel" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="accountGeneralInput"
          onChange={(e) => setName(e.target.value)}
        />

        <label className= "accountGeneralLabel" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          className="accountGeneralInput"
          onChange={(e) => setEmail(e.target.value)}
          disabled
        />

        <div className= "submitAccountGeneralForm">
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
          <button type="button" onClick={handleReset}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralTab;
