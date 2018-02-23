<template>
  <account :title="lang.title" :loading="loading" :loadtext="loadtext" @switchLang="switchLang">
    <FormItem>
      <Input 
      type="text" 
      clearable 
      size="large"
      autofocus
      :placeholder="lang.input.password.placeholder" 
      v-model.trim="password">
        <Icon type="ios-locked-outline" slot="prepend" :size="18"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Input 
      type="text" 
      clearable 
      size="large"
      autofocus
      :placeholder="lang.input.confirm.placeholder" 
      v-model.trim="confirm">
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

export default {
  data() {
    return {
      loading: false,
      loadtext: "loading ...",
      Lang: window.localStorage.getItem("lang") || this.$Lang,
      password: null,
      confirm: null
    };
  },
  computed: {
    lang() {
      return lang("resetpass", this.Lang);
    }
  },
  methods: {
    async submit() {},
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