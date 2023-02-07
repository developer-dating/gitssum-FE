import React from "react";
import SetProfile from "../../pages/SetProfile";
import { useQuery } from "@tanstack/react-query";
import { memberApis } from "../../api/memberApis";
import { setCookie } from "../../cookie/cookie";
import { Toaster, toast } from "react-hot-toast";

const Github = () => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useQuery(["githubLogin", code], () => memberApis.githubLoginAX(code), {
    //options
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      if (res.data.statusCode === 200) {
        localStorage.setItem("accessToken", res.headers.authorization);
        localStorage.setItem("nickname", res.data.data);
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

export default Github;
