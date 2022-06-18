import { atom } from "recoil";

export const isLoggedinAtom = atom({
  key: "isLoggedin",
  default: false,
});

export const isEmployAtom = atom({
    key: "isEmployee",
    default: false,
});

export const keystoreAtom = atom({
  key: "keystore",
  default: "",
});

export const forDemo = atom({
  key: "Demo",
  default: false,
});