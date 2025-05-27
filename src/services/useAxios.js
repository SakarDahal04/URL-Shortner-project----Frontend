import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAxios = () => {
  const { api } = useContext(AuthContext);
  return api;
};

export default useAxios;