import { checkRule } from "../../config/env";
import encrpty from "js-sha512";
import { checkEU, register } from "../senddata";

// 失去焦点后后要检查
export const blur = async (type, data) => {
  if (
    data &&
    checkRule[type].test(data) &&
    (type === "username" || type === "email")
  ) {
    let response;
    await checkEU(data).then(res => {
      response = res;
    });
    return response;
  }
};

export const signUp = data => {
  return register({
    username: data.username,
    password: encrpty(data.password),
    email: data.email
  })
}

export const check = (type,data) => {
  return checkRule[type].test(data);
}