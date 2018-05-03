<template>
  <div id="ix-home">
    <Header></Header>
    <!-- <div id="ix-viewport" ref="viewport">
      <div class="ix-viewport-item">
        <router-view></router-view>
      </div>
    </div> -->
      <router-view></router-view>
  </div>
</template>

<script>
import Header from "@@/header";
// import ISC from "@@/iscroll";
import IScroll from "iscroll";

export default {
  components: {
    Header
  }
};
</script>

<style scoped lang="scss">
#ix-home {
  overflow: hidden;
  &::before {
    clear: both;
    content: "";
    display: block;
    overflow: auto;
  }
  height: 100%;
  width: 100%;
}
</style>