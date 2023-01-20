import React from "react";
// import PageState from "../common/PageState";
import Main from "../../pages/Main";
import { useQuery } from "@tanstack/react-query";
import { memberApis } from "../../api/memberApis";
import { Cookies } from "react-cookie";
import { setCookie } from "../../cookie/cookie";

// 리다이렉트될 화면
const Kakao = () => {
  const cookies = new Cookies();
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  useQuery(["kakaoLogin", code], () => memberApis.kakaoLoginAX(code), {
    //options
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      if (res.data.statusCode === 200) {
        localStorage.setItem("accessToken", res.headers.authorization);
        setCookie("refreshToken", res.headers.authorization);

        window.location.replace("/setprofile");
      }
    },
    onError: (res) => {
      alert("로그인 실패");
      window.location.replace("/signin");
    },
  });

  return (
    <Main
      display="flex"
      state="loading"
      imgWidth="25%"
      height="100vh"
      text="로그인 중입니다."
    />
  );
};

export default Kakao;
