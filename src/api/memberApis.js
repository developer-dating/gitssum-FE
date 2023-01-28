import { instance } from "./instance";

export const memberApis = {
  /**카카오 로그인 */
  kakaoLoginAX: (code) => instance.get(`/login/oauth2/kakao1?code=${code}`),
  /**구글 로그인 */
  googleLoginAX: (code) => instance.get(`/login/oauth2/google?code=${code}`),
  /**깃허브 로그인 */
  githubLoginAX: (code) => instance.get(`/login/oauth2/github?code=${code}`),
};
