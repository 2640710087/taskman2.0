<template>
  <div class="tag">
    hello
  </div>
</template>

<script>
export default {
  name: "lable",
  props: {
    content: {
      type: String,
      default() {
        return "empty lable";
      }
    }
  }
};
</script>

<style scoped>

</style>