import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import Kakao from "../components/User/Kakao";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="/" element={<Main />} />
        <Route path="/login/oauth2/kakao1" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
