import React from "react";
import SetProfile from "../../pages/SetProfile";
import { useQuery } from "@tanstack/react-query";
import { memberApis } from "../../api/memberApis";
import { setCookie } from "../../cookie/cookie";
import { Toaster, toast } from "react-hot-toast";

// 리다이렉트될 화면
const Google = () => {
  // 인가 코드

  let code = new URL(window.location.href).searchParams.get("code");

  useQuery(["googleLogin", code], () => memberApis.googleLoginAX(code), {
    //options
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      if (res.data.statusCode === 200) {
        localStorage.setItem("accessToken", res.headers.authorization);
        localStorage.setItem("nickname", res.data.userId);
        localStorage.setItem("state", res.data.profile);
        setCookie("refreshToken", res.headers.authorization);
        toast.success("로그인 성공!");
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
export default Google;
