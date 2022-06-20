import { atom } from "recoil";
import { Cookies } from 'react-cookie';

export const isLoggedinAtom = atom({
  key: "isLoggedin",
  default: !!(new Cookies().get("access_token")),
});

export const isEmployAtom = atom({
    key: "isEmployee",
    default: window.sessionStorage.getItem("userType") === "1",
});

export const keystoreAtom = atom({
  key: "keystore",
  default: window.sessionStorage.getItem("keystore") || "",
});
