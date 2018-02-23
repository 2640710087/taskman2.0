const enLang = {
  login: {
    title: "Sign in",
    submit: "Sign in",
    input: {
      username: {
        placeholder: "Username/Email"
      },
      password: {
        placeholder: "Password"
      }
    },
    tip: {
      text: "Don't have an TaskMan ID?",
      link: {
        create: "Create one now.",
        forgot: "Forgot you password?"
      }
    }
  },
  register: {
    title: "Sign up",
    submit: "Sign up",
    input: {
      username: {
        placeholder: "Your username."
      },
      email: {
        placeholder: "Your email address."
      },
      password: {
        placeholder: "Enter Your Password."
      },
      confirm: {
        placeholder: "Confirm the password."
      }
    },
    passwordtip: {
      title: "Password strength:",
      strengthLevel: ["Too short", "Good", "Strong"],
      tip:
        "Use at least 8 characters. You can use uppercase and lowercase letters,number and _,.,@,-,*"
    }
  },
  sendmail: {
    title: "Reset password",
    submit: "Send password reset email",
    input: {
      email: {
        placeholder: "Enter your email address."
      }
    }
  },
  resetpass: {
    title: "Reset password",
    submit: "Reset password",
    input: {
      password: {
        placeholder: "Enter your new password."
      },
      confirm: {
        placeholder: "Enter your password again."
      }
    }
  }
};

export default enLang;
