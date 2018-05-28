import {
    checkRule
} from "../../config/env";
import encrpty from "js-sha512";
import {
    reset,
    checkLink as check
} from "../senddata";

// 检查链接的有效性
export const checkLink = random =>
    check({
        random
    });

//重置密码
export const resetPassword = async data => {
    return new Promise(reslove => {
        checkLink(data.random).then(res => {
            console.log(res)
            if (res.code && res.code === 412) {
                reslove({
                    data: {
                        code: res.code
                    }
                });
                return;
            }
        })
        let code;
        if (
            checkRule.password.test(data.password) &&
            data.password === data.confirm
        ) {
            setTimeout(() => {
                reslove(
                    reset({
                        random: data.random,
                        password: encrpty(data.password)
                    })
                );
            }, 800);
        } else {
            if (!checkRule.password.test(data.password)) {
                code = 303;
            } else if (data.password !== data.confirm) {
                code = 321;
            }
            setTimeout(() => {
                reslove({
                    data: {
                        code
                    }
                });
            }, 800);
        }
    });
};