// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

// export const setCookie = (name, value, options) => {
//   return cookies.set(name, value, { ...options });
// };

// export const getCookie = (name) => {
//   return cookies.get(name);
// };

// export const delCookie = (name) => {
//   return cookies.remove(name, { path: "/" });
// };

// export const setWeekCookie = (name, value) => {
//   cookies.set(name, value, {
//     path: "/",
//     expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//   });
// };
import { Cookies } from "react-cookie";

const cookie = new Cookies();
//쿠키 가져오기
export const getCookie = (name) => {
  return cookie.get(name);
};
// 쿠키 삭제
export const deleteCookie = (name) => {
  document.cookie = name + "=; expires = Thu, 01 Jan 1999 00:00:10 GMT;";
};

export const setCookie = (name, value) => {
  const date = new Date();
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toGMTString();

  document.cookie = name + "=" + value + expires + "; path=/";
};
