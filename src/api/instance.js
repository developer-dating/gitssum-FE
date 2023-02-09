import axios from "axios";
// import { getCookie } from "../cookie/cookie";

export const baseURL = axios.create({
  baseURL: "https://gitssum.com",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const instance = axios.create({
  baseURL: "https://gitssum.com",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("accessToken");

  config.headers["Authorization"] = token;
  // 혹시 3항 연산자가 안먹히면 수정
  return config;
});

baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("accessToken");

  config.headers["Authorization"] = token;
  // 혹시 3항 연산자가 안먹히면 수정
  return config;
});

export const createChatRoom = async (payload) => {
  const res = await instance.post(`/api/room`, payload);
  console.log(res);
  return res.data;
};

export const quitLogin = async (payload) => {
  const res = await instance.delete(`/user/remove`, payload);
  return res;
  // return (window.location.href = "/messageroom");
};

export const getChatList = async () => {
  const res = await instance.get(`/api/room`);
  return res;
};

export const getDetailChat = async (e) => {
  const res = await instance.post("api/message", e);
  return res;
};

instance.interceptors.response.use(
  function (response) {
    switch (response.data?.status) {
      case 404:
        alert(response.data?.msg);
        window.location.replace("/");
        break;
      case 403:
        alert("로그인 시간이 만료되었습니다.\n다시 로그인 해주세요.");
        localStorage.clear();
        window.location.replace("/");
        break;
      default:
        return response;
    }
  },
  async function (error) {
    console.log("interceptors error", error);
    switch (error.response.status) {
      // case 400:
      //     break;
      case 403:
        console.log("interceptors error 403", error.response);

        alert("로그인 시간이 만료되었습니다.\n다시 로그인 해주세요.");
        localStorage.clear();
        window.location.replace("/signin");

        break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);
