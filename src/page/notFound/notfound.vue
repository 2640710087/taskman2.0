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
        text = `The link has failed, please <a href="/#/reset">resend the mail</a>`
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
