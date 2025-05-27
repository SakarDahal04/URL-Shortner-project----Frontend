import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { createAxiosInstance } from "../services/axiosConfig";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authTokens, setAuthTokens] = useState(() => {
    const storedTokens = localStorage.getItem("authTokens");
    return storedTokens ? JSON.parse(storedTokens) : null;
  });

  const [user, setUser] = useState(() => {
    try {
      return authTokens ? jwtDecode(authTokens.access) : null;
    } catch (err) {
      return null;
    }
  });

  const [loading, setLoading] = useState(true);

  const loginUser = async (email, password) => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_API_URL}/api/token/`,
        {
          email,
          password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;
      console.log(response);

      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(
        "Login Failed ",
        error.response?.data?.detail || error.message
      );

      if (error.response.data && !error.response.data.detail ){
        const errorHtml = Object.entries(error.response?.data)
          .map(([field, messages]) => `<b>${field}</b>: ${messages.join(", ")}`)
          .join("<br>");
  
        Swal.fire({
          title: "Registration Failed",
          html: errorHtml,
          icon: "error",
          toast: true,
          timer: 5000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
      else if (error.response.data.detail) {
        Swal.fire({
          title: "Registration Failed",
          html: error.response.data.detail,
          icon: "error",
          toast: true,
          timer: 5000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }

    }
  };

  const registerUser = async (email, name, password, confirm_password) => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_API_URL}/account/register/`,
        { email, name, password, confirm_password },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data.message;

      if (response.status == 201) {
        console.log(response);
        navigate("/login");
        Swal.fire({
          title: "Registration Successful",
          text: data,
          icon: "success",
          toast: true,
          timer: 3000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.log(
        "Registration Failed",
        err.response?.data?.detail || err.message
      );

      const errorData = err.response?.data;

      console.log(err);

      const errorHtml = Object.entries(err.response?.data)
        .map(([field, messages]) => `<b>${field}</b>: ${messages.join(", ")}`)
        .join("<br>");

      Swal.fire({
        title: "Registration Failed",
        html: errorHtml,
        icon: "error",
        toast: true,
        timer: 5000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const resetUserPasswordSendEmail = async (email) => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_API_URL}/account/password-reset/`,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;

      // Message is sent in here
      console.log(data);

      Swal.fire({
        title: "Registration Failed",
        html: response.data.detail,
        icon: "success",
        toast: true,
        timer: 5000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });

      navigate("/login");
    } catch (err) {
      console.log(
        "Password Reset Failed",
        err.response?.data?.detail || err.message
      );

      Swal.fire({
        title: "Password Reset Failed",
        icon: "error",
        toast: true,
        timer: 5000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const resetUserPasswordChangePassword = async (
    password,
    password2,
    uidb64,
    token
  ) => {
    try {
      const response = api.post(
        `${
          import.meta.env.VITE_API_URL
        }/account/password-reset-confirm/${uidb64}/${token}/`,
        {
          new_password1: password,
          new_password2: password2,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(response);

      Swal.fire({
        title: "Password has been changed",
        icon: "success",
        toast: true,
        timer: 5000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });

      navigate("/login");
    } catch (err) {
      console.error(
        "Password Change Failed",
        err.response?.data?.detail || err.message
      );
    }
  };

  const changePasswordForAuthenticatedUser = async (
    old_password,
    password1,
    password2
  ) => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_API_URL}/account/change-password/`,
        {
          old_password: old_password,
          new_password: password1,
          confirm_password: password2,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      Swal.fire({
        title: "Password Changed Successfully",
        icon: "success",
        toast: true,
        timer: 5000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });

      console.log(response);
      logoutUser()
    } catch (err) {
      console.error(
        "Password Change Failed",
        err.response?.data?.detail || err.message
      );
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);

    localStorage.removeItem("authTokens");
    Swal.fire({
      title: "Logged out successfully",
      icon: "success",
      toast: true,
      timer: 5000,
      position: "top-right",
      timerProgressBar: true,
      showConfirmButton: false,
    });

    navigate("/login");
  };

  const api = createAxiosInstance(
    authTokens,
    setAuthTokens,
    setUser,
    logoutUser
  );

  const contextData = {
    authTokens,
    setAuthTokens,
    user,
    setUser,
    loginUser,
    registerUser,
    logoutUser,
    resetUserPasswordSendEmail,
    resetUserPasswordChangePassword,
    changePasswordForAuthenticatedUser,
    api, // to send request from other pages
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwtDecode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
