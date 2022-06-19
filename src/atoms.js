import { atom } from "recoil";
import { Cookies } from 'react-cookie';

export const isLoggedinAtom = atom({
  key: "isLoggedin",
  default: !!(new Cookies().get("access_token")),
});

export const isEmployAtom = atom({
    key: "isEmployee",
    default: false,
});

export const keystoreAtom = atom({
  key: "keystore",
  default: "",
});
