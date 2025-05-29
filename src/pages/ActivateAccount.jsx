import React, { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { createAxiosInstance } from "./../services/axiosConfig";
import AuthContext from "./../context/AuthContext";

const ActivateAccount = () => {
  const { uidb64, token } = useParams();
  const navigate = useNavigate();
  const calledRef = useRef(false); // 👈 track whether we've already called the API

  const { authTokens, setAuthTokens, setUser, logoutUser } =
    useContext(AuthContext);

  const api = createAxiosInstance(
    authTokens,
    setAuthTokens,
    setUser,
    logoutUser
  );

  useEffect(() => {
    const activateAccount = async () => {
      if (calledRef.current) return; // 👈 prevent second call
      calledRef.current = true;

      try {
        await api.get(`/account/activate/${uidb64}/${token}/`);
        Swal.fire({
          title: "Account Activated!",
          text: "You can now log in.",
          icon: "success",
          timer: 3000,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
        });
        navigate("/login");
      } catch (error) {
        Swal.fire({
          title: "Activation Failed",
          text:
            error.response?.data?.error ||
            "Invalid or expired activation link.",
          icon: "error",
          confirmButtonText: "OK",
        });
        navigate("/register");
      }
    };

    activateAccount();
  }, [uidb64, token, api, navigate]);

  return null;
};

export default ActivateAccount;
