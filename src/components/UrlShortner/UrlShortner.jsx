import React, { useContext, useState } from "react";
import { createAxiosInstance } from "../../services/axiosConfig";
import AuthContext from "../../context/AuthContext";
import "./UrlShortner.css";

const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const [shortend, setShortened] = useState("");
  const [input, setInput] = useState("");

  const { authTokens, setAuthTokens, setUser, logoutUser } =
    useContext(AuthContext);

  const api = createAxiosInstance(
    authTokens,
    setAuthTokens,
    setUser,
    logoutUser
  );

  const handleShorten = async () => {
    try {
      console.log("Shortening the url...");
      console.log(url);
      const response = await api.post(
        `/url/shorten/`,
        {
          original_url: url,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Response:", response);

      setShortened(response.data.short_code);

      setShortened(response.data.short_code);
      console.log(response.data.short_code);
    } catch (err) {
      console.log(
        "Shortening of URL failed: ",
        err.response?.data?.detail || err.message
      );
    }
  };

  return (
    <div className="main-block">
      <div className="url-shorten">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.example.com"
        />
        <button onClick={handleShorten}>Shorten URL</button>
      </div>
      <div className="shortened-url-block">
        <div>Your Shortened Url code is:</div>
        <div className="shortened-url">
          {shortend ? <div>{shortend}</div> : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default UrlShortner;
