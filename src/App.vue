<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./style/common.scss";
#app {
  height: 100%;
  &::before {
    clear: both;
    content: "";
    display: block;
    overflow: auto;
  }
}
</style>
