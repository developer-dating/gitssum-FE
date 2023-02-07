import { atom } from "recoil";

export const otherNickName = atom({
  key: "otherNickName",
  default: "",
});

export const chatDataState = atom({
  key: "chatDataState",
  default: [],
});
