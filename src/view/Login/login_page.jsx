import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./login_form";
import Navbar from "../../Components/Navbar/index";
import Index from "../../view/index";

import { useAuth } from "../../AuthContext.jsx";

const LoginPage = () => {
  const { loggedInUser } = useAuth();

  return (
    <div>
      {loggedInUser ? (
        <Routes>
          <Route path="/" exact element={<Index />} />
        </Routes>
      ) : (
        <>
          <Navbar signUp={true} />
          <LoginForm />
        </>
      )}
    </div>
  );
};

export default LoginPage;
