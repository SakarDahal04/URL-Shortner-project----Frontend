import React from "react";
import AuthContext from "./../context/AuthContext";
import { useContext } from "react";
import { createAxiosInstance } from "./../services/axiosConfig";

const useRedirectWebsite = (id) => {
  const { authTokens, setAuthTokens, setUser, logoutUser } =
    useContext(AuthContext);

  const api = createAxiosInstance(
    authTokens,
    setAuthTokens,
    setUser,
    logoutUser
  );

  const redirectWebsite =  async (short_code) => {
    const response = await api.get(`url/redirect/${short_code}`)
    return response.data.original_url;
  }

  return redirectWebsite
};

export default useRedirectWebsite;
