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

// export const instance = axios.create({
//   baseURL: "https://gitssum.com",
//   headers: {
//     Access_Token:
//       localStorage.getItem("accessToken") === undefined
//         ? ""
//         : localStorage.getItem("accessToken"),
//   },

//   withCredentials: true,
// });

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
// instance.interceptors.request.use((config) => {
//   if (config.headers === undefined) return;
//   const token = localStorage.getItem("accessToken");
//   console.log(token);
//   config.headers["Authorization"] = `Bearer ${token}`;
//   return config;
// });

export const createChatRoom = async (payload) => {
  const res = await instance.post(`/api/room${payload}`);
  console.log(res);
  return res.data;
};

export const quitChatRoom = async (payload) => {
  const res = await instance.delete(`/api/chat${payload}`);
  return (window.location.href = "/messageroom");
};

export const getChatList = async () => {
  const res = await instance.get("/api/chat/rooms");
  return res;
};

export const getDetailChat = async (payload) => {
  const res = await instance.get(`webSocket/api/message`);
  return res;
};
// export const instance = axios.create({
//   withCredentials: true,
//   baseURL: "https://gitssum.com",
//   headers: {
//     // "content-type": "application/json;charset=UTF-8",
//     //accept: "application/json,",
//     "Access-Control-Allow-Origin": "*",
//     //"Content-type": "application/json",
//   },
// });

// 요청 인터셉터 추가하기
// instance.interceptors.request.use(
//   function (config) {
//     // 요청이 전달되기 전에 작업 수행
//     return config;
//   },
//   function (error) {
//     // 요청 오류가 있는 작업 수행
//     return Promise.reject(error);
//   }
// );

// 응답 인터셉터 추가하기
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("is_login");
//     if (token) {
//       config.headers = { authorization: token };
//       return config;
//     }
//     return config;
//   },
//   () => {
//     return;
//   }
// );
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
        // console.log("인터셉터 403 error", error);
        // const refreshToken = localStorage.getItem('refreshToken');
        // const token = localStorage.getItem('token');
        // if (token !== null && refreshToken !== null) {
        alert("로그인 시간이 만료되었습니다.\n다시 로그인 해주세요.");
        localStorage.clear();
        window.location.replace("/signin");
        // }
        //     // const res = await axios.get(`${process.env.REACT_APP_API_URL}/member/signup/issue/token`, {
        //     //     headers: {
        //     //         "Refresh_Token": refreshToken
        //     //     }
        //     // })

        //     // console.log("인터셉터 res", res);
        //     // if (res.data.status === 200) {
        //     //     localStorage.setItem("token", res.headers.access_token);
        //     //     localStorage.setItem("refreshToken", res.headers.refresh_token);
        //     // }
        // }

        break;
      // case 404:
      //     break;
      // case 500:
      //     break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);
