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

  useQuery(["kakaoLogin", code], () => memberApis.kakaoLoginAX(code), {
    //options
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      if (res.data.statusCode === 200) {
        toast.success("로그인 성공!");
        localStorage.setItem("accessToken", res.headers.authorization);
        localStorage.setItem("nickname", res.data.userId);
        localStorage.setItem("state", res.data.profile);
        setCookie("refreshToken", res.headers.authorization);
        window.location.replace("/setprofile");
      }
    },
    onError: (res) => {
      toast.error("로그인 실패!");
      window.location.replace("/signin");
    },
  });

  return <></>;
};

export default Kakao;
