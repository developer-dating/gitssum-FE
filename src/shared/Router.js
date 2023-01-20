import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useNavigate } from "react-router";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import Kakao from "../components/User/Kakao";
import Recommend from "../pages/Recommend";
import AddRecommend from "../pages/AddRecommend";
import LikeMe from "../pages/LikeMe";

const Router = () => {
  // let isAuthorized = localStorage.getItem("isAuthorized");
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        {/* {!isAuthorized ? navigate("/signin") : navigate("/")} */}

        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Main />} />
        <Route path="/login/oauth2/kakao1" element={<Kakao />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/addrecommend" element={<AddRecommend />} />
        <Route path="/likeme" element={<LikeMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
