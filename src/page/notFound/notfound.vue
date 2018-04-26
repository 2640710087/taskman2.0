<template>
  <account :title="text" :langSwitch="false"></account>
</template>

<script>
import account from "@/components/account/account";
export default {
  name: "link_failed",
  computed: {
    text() {
      let text = `404 Not Found`;
      if (this.$route.params.random) {
        text = `链接已经失效，请重新<a href="/#/reset">发送邮件</a>`;
      }
      return text;
    }
  },
  components: {
    account
  }
};
</script>

<style scoped>

</style>
