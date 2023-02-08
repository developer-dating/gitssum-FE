import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
// import { useInput } from "../../../lib/utils/useInput";
// import { __postLogin } from "../../../redux/modules/loginSlice";
import {
  GOOGLE_AUTH_URL,
  KAKAO_AUTH_URL,
  GITHUB_AUTH_URL,
} from "../../api/login";
import { Link } from "react-router-dom";
// import { LockClosedIcon } from "@heroicons/react/20/solid";

// LOGIN
const Login = () => {
  const onClickHandler = (flag) => {
    if (flag === "kakao") {
      window.location.href = KAKAO_AUTH_URL;
    } else if (flag === "github") {
      window.location.href = GITHUB_AUTH_URL;
    } else if (flag === "google") {
      window.location.href = GOOGLE_AUTH_URL;
    }
  };
  return (
    <>
      <div className="font-SUIT flex items-center justify-center">
        <div className="shadow-xl ">
          <div className="w-[380px] space-y-20 h-[100vh] flex flex-col justify-center items-center">
            <div>
              <img
                className="mx-auto h-[121px] w-[169px]"
                src="/img/signin_logo.png"
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-l font-bold tracking-tight text-gray-900">
                갓생 사는 개발자를 위한 소셜 데이팅 앱
              </h2>
            </div>

            <div className="space-y-4 flex flex-col items-center justify-center">
              <button
                className="group relative flex w-80 h-12 justify-center items-center rounded-md border border-transparent bg-[#EFDB30] py-2 px-4 text-sm font-medium text-[#000000] focus:outline-none focus:ring-2  focus:ring-offset-2"
                onClick={() => onClickHandler("kakao")}
              >
                <img
                  className="mr-2"
                  src="/img/KakaoTalk.png"
                  alt="KakaotalkLogo Logo"
                ></img>
                카카오 로그인
              </button>
              <button
                className="group relative flex w-80 h-12 justify-center items-center rounded-md border border-transparent bg-[#FFFFFF] py-2 px-4 text-sm font-medium text-black focus:outline-none focus:ring-2  focus:ring-offset-2 border border-[#000000]"
                onClick={() => onClickHandler("google")}
              >
                <img src="/img/Logo.png" alt="Google Logo"></img>
                Google로 로그인
              </button>
              <button
                className="group relative flex w-80 h-12 justify-center items-center rounded-md border border-transparent bg-[#222222] py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2"
                onClick={() => onClickHandler("github")}
              >
                <img
                  className="mr-2"
                  src="/img/Github.png"
                  alt="Github Logo"
                ></img>
                Github으로 계속하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
