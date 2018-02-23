const cnLang = {
  login: {
    "title": "进入TaskMan",
    "submit": "登录",
    "input": {
      "username": {
        "placeholder": "用户名/邮箱"
      },
      "password": {
        "placeholder": "密码"
      }
    },
    "tip": {
      "text": "还没有TaskMan ID吗？",
      "link": {
        "create": "现在创建一个？",
        "forgot": "忘记密码了？"
      }
    }
  },
  register: {
    "title": "加入TaskMan",
    "submit": "注册",
    "input": {
      "username": {
        "placeholder": "用户名"
      },
      "email": {
        "placeholder": "邮箱"
      },
      "password": {
        "placeholder": "密码"
      },
      "confirm": {
        "placeholder": "确定密码"
      }
    },
    passwordtip: {
      title: "密码强度：",
      strengthLevel: ["太短", "较强", "强"],
      tip:
        "请至少使用 8 个字符。可以使用大小写字母数字和常用字符(_，.，@，*，-)。"
    }
  },
  sendmail: {
    "title": "找回您的密码",
    "submit": "发送重置邮件",
    "input": {
      "email": {
        "placeholder": "输入您的邮箱"
      }
    }
  },
  resetpass: {
    "title": "重置您的密码",
    "submit": "重置密码",
    "input": {
      "password": {
        "placeholder": "输入您的新密码"
      },
      "confirm": {
        "placeholder": "再次输入密码"
      }
    }
  },
}

export default cnLang;