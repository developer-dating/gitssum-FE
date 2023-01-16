const {
  REACT_APP_KAKAO_REST_API_KEY,
  REACT_APP_KAKAO_REDIRECT_URI,
  REACT_APP_GOOGLE_CLIENT_ID,
  REACT_APP_GOOGLE_REDIRECT_URI,
} = process.env;

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=profile%20email
  `;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=7e752663661fc807285cb45197bef9d5&redirect_uri=http://localhost:3000/login/oauth2/kakao&response_type=code`;

export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=d83af89cb38b172425e9&redirect_uri=http://localhost:8080/login/oauth2/code/github`;
