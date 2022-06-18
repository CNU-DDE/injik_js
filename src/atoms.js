import { atom } from "recoil";

export const isLoggedin = atom({
  key: "isLoggedin",
  default: false,
});

export const isEmploy = atom({
    key: "isEmployee",
    default: false,
});

export const keystore = atom({
  key: "keystore",
  default: "",
});

export const forDemo = atom({
  key: "Demo",
  default: false,
});