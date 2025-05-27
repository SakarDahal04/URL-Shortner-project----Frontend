import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { createAxiosInstance } from "../services/axiosConfig";

const useDeleteUrl = (id) => {
  const { authTokens, setAuthTokens, setUser } = useContext(AuthContext);

  const api = createAxiosInstance(authTokens, setAuthTokens, setUser);
  
  const deleteUrl = async (id) => {
    const response = await api.delete(`url/${id}/`);
    return response;
  };

  return deleteUrl;
};

export default useDeleteUrl;
