<template>
  <account :title="lang.title" :loading="loading" :loadtext="loadtext" @switchLang="switchLang">
    <FormItem>
      <Input 
      type="password" 
      clearable 
      size="large"
      autofocus
      :placeholder="lang.input.password.placeholder"
      v-model.trim="password"
      @on-enter="submit"
      :maxlength="24">
        <Icon type="ios-locked-outline" slot="prepend" :size="18"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Input 
      type="password" 
      clearable 
      size="large"
      autofocus
      :placeholder="lang.input.confirm.placeholder"
      v-model.trim="confirm"
      @on-enter="submit"
      :maxlength="24">
        <Icon type="ios-locked" slot="prepend" :size="18"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="success" long @click="submit()">{{ lang.submit }}</Button>
    </FormItem>
  </account>
</template>

<script>
import { FormItem, Icon, Input, Button } from "iview";
import account from "@/components/account/account";
import lang from "../../locale/";
import { checkLink, resetPassword } from "../../plugins/account/resetPassword";
export default {
  data() {
    return {
      loading: false,
      loadtext: "Loading ...",
      Lang: window.localStorage.getItem("lang") || this.$Lang,
      password: "",
      confirm: ""
    };
  },
  computed: {
    lang() {
      return lang("resetpass", this.Lang);
    }
  },
  methods: {
    async submit() {
      this.loadtext = "Loading...";
      this.loading = true;
      resetPassword({
        random: this.$route.params.random,
        password: this.password,
        confirm: this.confirm
      }).then(res => {
        this.loading = false;

        if (res.code === 204) {
          this.Response(res.code);
        } else {
          this.$Tip(res.code, this.Lang);
        }
      });
    },
    Response(code) {
      this.$Tip(code, this.Lang);
      if (code >= 200 && code < 300) {
        setTimeout(() => {
          this.loading = true;
        }, 1000);
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/login");
        }, 3000);
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
    Icon
  }
};
</script>

<style scoped>

</style>