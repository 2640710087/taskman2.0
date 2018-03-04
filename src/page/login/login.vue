<template>
  <account :title="lang.title" :loading="loading" :loadtext="loadtext" @switchLang="switchLang">
    <FormItem>
      <Input type='text' clearable autofocus size='large' :placeholder='lang.input.username.placeholder' v-model.trim='username' @on-enter="submit()" ref="username" :maxlength="20">
        <Icon type='ios-person' slot='prepend' :size='18'></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Input type='password' clearable size='large' :placeholder='lang.input.password.placeholder' v-model.trim='password' @on-enter="submit()" ref="password" :maxlength="24">
        <Icon type='ios-locked' slot='prepend' :size='18'></Icon>
      </Input>
      <router-link to='reset' v-if='forgot'>{{ lang.tip.link.forgot }}</router-link>
    </FormItem>
    <FormItem>
      <Button type="success" long @click="submit()">{{ lang.submit }}</Button>
    </FormItem>
    <div class='link-body'>
      <div class='link-create'>
        <span>{{ lang.tip.text }}</span>
        <router-link to='register'>{{ lang.tip.link.create }}</router-link>
      </div>
    </div>
  </account>
</template>

<script>
import { FormItem, Icon, Input, Button } from "iview";
import account from "@/components/account/account";
import { login } from "../../plugins/account";
import lang from "../../locale/";

export default {
  data() {
    return {
      loading: false,
      loadtext: "Loading ...",
      Lang: window.localStorage.getItem("lang") || this.$Lang,
      username: "",
      password: "",
      error: 0
    };
  },
  computed: {
    lang() {
      return lang("login", this.Lang);
    },
    forgot() {
      if (this.error >= 1) return true;
    }
  },
  methods: {
    //提交按钮
    async submit() {
      this.loading = true;
      await login({
        username: this.username,
        password: this.password
      }).then(res => {
        this.loading = false;
        this.loginResponse(res);
      });
    },
    loginResponse(res) {
      let code = res.code;
      this.$Tip(code, this.Lang);
      if (code > 300) {
        this.error ++;
      }else if (code === 202) {
        // after one seconds loading;
        setTimeout(() => {
          this.loading = true;
        }, 1000);

        // after three seconds jump to home.
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/");
        }, 3000);
      }
    },
    //切换语言
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
    Icon
  }
};
</script>

<style lang="scss" scoped>
.link-body {
  color: white;
  margin-bottom: 24px;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>