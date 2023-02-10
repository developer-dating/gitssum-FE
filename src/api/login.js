const {
  REACT_APP_KAKAO_REST_API_KEY,
  REACT_APP_KAKAO_REDIRECT_URI,
  REACT_APP_GOOGLE_CLIENT_ID,
  REACT_APP_GOOGLE_REDIRECT_URI,
} = process.env;

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=1002157101396-1c36k7hdfahq9vt2njpeq9cjmd5eo7h9.apps.googleusercontent.com&redirect_uri=https://gitssum.store/login/oauth2/google&response_type=code&scope=profile%20email
  `;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=a3ccfe1c212ee4bdbf12736ae762c79a&redirect_uri=https://gitssum.store/login/oauth2/kakao1&response_type=code`;

export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=d83af89cb38b172425e9&redirect_uri=https://gitssum.store/login/oauth2/github`;

// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=a3ccfe1c212ee4bdbf12736ae762c79a&redirect_uri=http://localhost:3000/login/oauth2/kakao1&response_type=code`;
