import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useNavigate } from "react-router";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import Kakao from "../components/User/Kakao";
import Google from "../components/User/Google";
import Github from "../components/User/Github";
import SetProfile from "../pages/SetProfile";
import UserDetail from "../pages/UserDetail";
import Mypage from "../pages/Mypage";
import Recommend from "../pages/Recommend";
import AddRecommend from "../pages/AddRecommend";
import LikeMe from "../pages/LikeMe";

const Router = () => {
  // let isAuthorized = localStorage.getItem("isAuthorized");
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/setprofile" element={<SetProfile />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Main />} />
        <Route path="/userdetail/:id" element={<UserDetail />} />
        <Route path="/login/oauth2/kakao1" element={<Kakao />} />
        <Route path="/login/oauth2/google" element={<Google />} />
        <Route path="/login/oauth2/github" element={<Github />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/addrecommend" element={<AddRecommend />} />
        <Route path="/likeme" element={<LikeMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
