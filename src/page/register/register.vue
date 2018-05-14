<template>
  <account :title="lang.title" :loading="loading" :loadtext="loadtext" @switchLang="switchLang" >
    <FormItem>
      <Input type="text" clearable size="large" :placeholder="lang.input.username.placeholder" v-model.trim="username"
        @on-blur="blur('username')"
        @on-focus="focus('username')"
        :maxlength="20"
        @on-enter="submit()">
      <Icon type="ios-person" slot="prepend" :size="20"></Icon>
      </Input>
      <tip :Lang="Lang" :code="error.username" ></tip>
    </FormItem>
    <FormItem>
      <Input type="text" clearable size="large" :placeholder="lang.input.email.placeholder" v-model="email"
        @on-blur="blur('email')"
        @on-focus="focus('email')"
        @on-enter="submit()">
      <Icon type="ios-email" slot="prepend" :size="20"></Icon>
      </Input>
      <tip :Lang="Lang" :code="error.email" ></tip>
    </FormItem>
    <FormItem>
      <Input type="password" clearable size="large" :placeholder="lang.input.password.placeholder" v-model.trim="password"
        @on-focus="focus('password')"
        @on-blur="blur('password')"
        @on-change="inputPassword()"
        :maxlength="24"
        @on-enter="submit()">
      <Icon type="ios-locked-outline" slot="prepend" :size="20"></Icon>
      </Input>
      <tip :Lang="Lang" :code="error.password" ></tip>
    </FormItem>
    <FormItem>
      <Input type="password" clearable size="large" :placeholder="lang.input.confirm.placeholder" v-model="confirm"
        @on-focus="focus('confirm')"
        @on-blur="blur('confirm')"
        :maxlength="24"
        @on-enter="submit()">
      <Icon type="ios-locked" slot="prepend" :size="20"></Icon>
      </Input>
      <tip :Lang="Lang" :code="error.confirm" ></tip>
    </FormItem>
    <FormItem>
      <Button type="success" long @click="submit()">{{ lang.submit }}</Button>
    </FormItem>
    <FormItem class="link">
        已有FOREST ID？<a href="/#/login">现在登录?</a>
    </FormItem>
  </account>
</template>

<script>
import { FormItem, Icon, Input, Button } from "iview";
import account from "@/components/account/account";
import tip from "@/components/tip/tip";
import lang from "../../locale/";
import {
  blur,
  signUp as register,
  check
} from "../../plugins/account/register";
export default {
  name: "register",
  data() {
    return {
      loading: false,
      loadtext: "Loading ...",
      Lang: window.localStorage.getItem("lang") || this.$Lang,
      username: "",
      email: "",
      password: "",
      confirm: "",
      error: {
        username: null,
        email: null,
        password: null,
        confirm: null
      }
    };
  },
  computed: {
    lang() {
      return lang("register", this.Lang);
    },
    registerStatus() {
      let value = Object.values(this.error);
      let result = new Array(4).fill(false);
      value.filter((v, i) => {
        if (v >= 200 && v < 300) result[i] = true;
        if (v > 300) result[i] = false;
      });
      return result[0] && result[1] && result[2] && result[3];
    }
  },
  methods: {
    submit(e) {
      this.loadtext = "Loading...";
      let time = 0;
      let timer = setInterval(() => {
        time++;
      }, 10);
      this.loading = true;
      if (this.registerStatus) {
        register({
          username: this.username,
          password: this.password,
          email: this.email
        }).then(res => {
          clearInterval(timer);
          setTimeout(() => {
            this.loading = false;
            if (res.code) {
              this.$Tip(res.code, this.Lang);
              if (res.code === 201) {
                setTimeout(() => {
                  this.loading = true;
                  setTimeout(() => {
                    this.loading = false;
                    this.$router.push("login");
                  }, 2000);
                }, 1000);
              }
            } else {
              this.$Tip(501, this.Lang);
            }
          }, 1000 - time * 10);
        });
      } else {
        clearInterval(timer);
        setTimeout(() => {
          this.loading = false;
          ["username", "password", "email", "confirm"].forEach(v => {
            this.blur(v);
          });
          this.$Tip(324, this.Lang);
        }, 1000 - time * 10);
      }
    },
    focus(type) {
      if (this.error[type] > 300) this.error[type] = null;
    },
    blur(type) {
      if (!this[type]) {
        this.error[type] = 320;
        return;
      }
      if (type !== "confirm") {
        if (type === "username") {
          if (!check(type, this[type])) this.error[type] = 302;
          else
            blur(type, this[type]).then(res => {
              this.error[type] = res.code;
            });
        } else if (type === "email") {
          if (!check(type, this[type])) this.error[type] = 304;
          else
            blur(type, this[type]).then(res => {
              this.error[type] = res.code;
            });
        } else if (type === "password") {
          if (!check(type, this[type])) this.error[type] = 303;
          else this.error[type] = 200;
        }
      } else {
        if (this.password !== this.confirm) this.error.confirm = 321;
        else this.error.confirm = 200;
      }
    },
    inputPassword() {
      if (this.error.confirm > 300) {
        this.confirm = null;
      }
    },
    switchLang(lang) {
      this.loading = true;
      this.loadtext = "Setting Language";
      setTimeout(() => {
        this.loading = false;
        this.Lang = lang;
      }, 800);
    }
  },
  components: {
    account,
    Input,
    Button,
    FormItem,
    Icon,
    tip
  }
};
</script>

<style scoped lang="scss">
.link {
  color: white;
}
a {
  color: #2d8cf0;
  &:hover {
    text-decoration: underline;
  }
}
</style>
