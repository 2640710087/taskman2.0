<template>
  <account :title="lang.title" :loading="loading" :loadtext="loadtext" @switchLang="switchLang">
    <FormItem>
      <Input 
      type="text" 
      clearable 
      size="large"
      autofocus
      :placeholder="lang.input.email.placeholder" 
      v-model.trim="email">
        <Icon type="ios-email" slot="prepend" :size="20"></Icon>
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
      email: null,
    };
  },
  computed: {
    lang() {
      return lang("sendmail", this.Lang);
    }
  },
  methods: {
    async submit() {

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