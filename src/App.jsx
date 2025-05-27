import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Urls from "./pages/Urls";
import About from "./pages/About";
import PrivateRoute from "./context/PrivateRoute";
import Profile from "./pages/Profile";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetChange from "./pages/PasswordResetChange";
import ActivateAccount from "./pages/ActivateAccount";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/reset-password/confirm/:uidb64/:token" element={<PasswordResetChange />} />
          <Route path="/activate-account/:uidb64/:token" element={<ActivateAccount />} />


          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/urls"
            element={
              <PrivateRoute>
                <Urls />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
