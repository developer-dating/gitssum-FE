import React from "react";
// import PageState from "../common/PageState";
import SetProfile from "../../pages/SetProfile";
import { useQuery } from "@tanstack/react-query";
import { memberApis } from "../../api/memberApis";
import { Cookies } from "react-cookie";
import { setCookie } from "../../cookie/cookie";
import { Toaster, toast } from "react-hot-toast";

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
      console.log(res);
      if (res.data.statusCode === 200) {
        toast.success("로그인 성공!");
        localStorage.setItem("accessToken", res.headers.authorization);
        localStorage.setItem("nickname", res.data.userId);
        setCookie("refreshToken", res.headers.authorization);
        window.location.replace("/setprofile");
      }
    },
    onError: (res) => {
      toast.error("로그인 실패!");
      window.location.replace("/signin");
    },
  });

  return (
    <>
      <SetProfile
        display="flex"
        state="loading"
        imgWidth="25%"
        height="100vh"
        text="로그인 중입니다."
      />
    </>
  );
};

export default Kakao;
