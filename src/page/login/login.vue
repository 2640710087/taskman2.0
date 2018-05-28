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
import { login, Sleep } from "../../plugins/account";
import { checkToken } from "@/plugins/senddata";
import lang from "../../locale/";
import { setStorage } from "../../config/other";
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
      document.activeElement.blur();
      this.loading = true;
      this.loadtext = "Loading...";

      let loginRes = await login({
        username: this.username,
        password: this.password
      });
      this.loading = false;
      this.loginResponse(loginRes);
    },
    async loginResponse(res) {
      let { code, username, token } = res;
      checkToken(username, token);
      this.$Tip(code, this.Lang);

      if (code > 300) {
        this.error++;
        this.password = "";
      } else if (code === 201) {
        // after one seconds loading;
        setStorage("userInfo", { username, token });
        this.$store.commit("setUserInfo", { username, token });
        await Sleep(1000);
        this.loading = true;
        // after three seconds jump to home.
        await Sleep(2020);
        this.loading = false;
        this.$router.push("/");
      }
    },
    //切换语言
    async switchLang(lang) {
      this.loading = true;
      this.loadtext = "Setting Language";
      await Sleep(3000);
      this.loading = false;
      this.Lang = lang;
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
