const error = {
  "320": {
    type: "error",
    msg: {
      "zh-CN": "此处不能为空！",
      en: "You can't leave this empty."
    },
    description: "不能为空"
  },
  "321": {
    type: "error",
    msg: {
      "zh-CN": "两次密码不一样！",
      en: "The password is different twice!"
    },
    description: "密码不一样"
  },
  "322": {
    type: "error",
    msg: {
      "zh-CN": "必须填写密码",
      en: "You must enter password."
    },
    description: "不能为空"
  },
  "323": {
    type: "error",
    msg: {
      "zh-CN": "请输入确认密码",
      en: "Please enter the confirmation password."
    },
    description: "不能为空"
  },
  "324": {
    type: "error",
    msg: {
      "zh-CN": "您创建的账户存在问题",
      en: "There were problems creating your account."
    },
    description: "不能为空"
  },
  "301": {
    type: "error",
    msg: {
      "zh-CN": "内部错误，请联系管理员，代码：301",
      en: "Internal error, please contact administrator, code: 301."
    },
    description: "参数缺失"
  },
  "302": {
    type: "error",
    msg: {
      "zh-CN": "用户名不合法，用户名可用(a-z,A-Z,-,?,/), 长度至少为4",
      en:
        "The user name is not legal, please fill in the user name again. (a-z,A-Z,-,?,/)"
    },
    description: "用户正则错误"
  },
  "303": {
    type: "error",
    msg: {
      "zh-CN": "密码长度至少需要大于8位,只能使用@，-，*，_,和大小写及数字",
      en:
        "The password must be at least 8 digits long, only @, -, *, _, and case and number"
    },
    description: "密码正则错误"
  },
  "304": {
    type: "error",
    msg: {
      "zh-CN": "不是有效的邮箱",
      en: "It is not a valid mailbox, please refill it."
    },
    description: "邮箱正则错误"
  },
  "311": {
    type: "error",
    msg: {
      "zh-CN": "用户名已被注册，请换一个用户名吧！",
      en: "User name has been registered, please change a user name!"
    },
    description: "用户重复"
  },
  "312": {
    type: "error",
    msg: {
      "zh-CN": "邮箱已被注册，请换一个邮箱！",
      en: "The mailbox has been registered, please change a mailbox!"
    },
    description: "邮箱重复"
  },
  "313": {
    type: "error",
    msg: {
      "zh-CN": "不好意思，找不到这个邮箱",
      en: "sorry,Can't find email."
    },
    description: "参数不存在"
  },
  "401": {
    type: "error",
    msg: {
      "zh-CN": "用户名或密码错误",
      en: "Username or password error."
    },
    description: "用户名或密码错误"
  },
  "402": {
    type: "error",
    msg: {
      "zh-CN": "注册失败，请联系管理员，代码501。",
      en: "Registration failed, please contact the administrator, code 501."
    },
    description: "注册失败 => 501"
  },
  "403": {
    type: "error",
    msg: {
      "zh-CN": "登录失败，请联系管理员，代码501",
      en: "Login failed, please contact the administrator, code 501."
    },
    description: "登录失败 => 501"
  },
  "404": {
    type: "error",
    msg: {
      "zh-CN": "密码重置失败，请稍后再试，或者联系管理员。",
      en:
        "Password reset failed, please try again later, or contact the administrator."
    },
    description: "密码未重置"
  },
  "411": {
    type: "error",
    msg: {
      "zh-CN": "邮件发送失败，请稍后再试，或者联系管理员。",
      en:
        "Email send failed, please try again later, or contact the administrator."
    },
    description: "邮件未发送"
  },
  "412": {
    type: "error",
    msg: {
      "zh-CN": "链接已失效，请重新发送。",
      en: "The link has expired. Please resend it."
    },
    description: "链接失效"
  },
  "501": {
    type: "insert error",
    msg: {
      "zh-CN": "服务器有点小问题，请稍等！",
      en: "The server has a little problem, please wait a moment!"
    },
    description: "服务器错误(注册、登录失败 数据库异常)"
  },
  "502": {
    type: "insert error",
    msg: {
      "zh-CN": "服务器维护中，请稍后再试！",
      en: "Server maintenance, please try again later!"
    },
    description: "服务器维护中"
  }
};
export default function(code) {
  return error[code];
}
