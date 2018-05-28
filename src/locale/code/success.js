const success = {
    "201": {
        type: "success",
        msg: {
            "zh-CN": "操作成功",
            en: "successfully."
        },
        description: "注册成功"
    },
    "202": {
        type: "success",
        msg: {
            "zh-CN": "query successfully.",
            en: "ok"
        },
        description: "query successfully."
    },
    "203": {
        type: "success",
        msg: {
            "zh-CN": "可用",
            en: "User name available."
        },
        description: "无重名用户或邮箱"
    },
    "204": {
        type: "success",
        msg: {
            "zh-CN": "密码重置成功",
            en: "Password reset successfully"
        },
        description: "密码重置成功"
    },
    "211": {
        type: "success",
        msg: {
            "zh-CN": "邮件已经发送，请稍等片刻，或者查看您的垃圾邮件箱",
            en: "Email has been sent, please wait a moment, or check your spam box."
        },
        description: "邮件已发送"
    },
    "212": {
        type: "success",
        msg: {
            "zh-CN": "链接有效，请稍等，正在获取您的资料",
            en: "The link is valid, please wait a moment, it is getting your information."
        },
        description: "链接有效"
    }
};

export default function (code) {
    return success[code];
}
