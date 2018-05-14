<template>
  <div id="ix-home">
    <Header></Header>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "@@/header";

export default {
  components: {
    Header
  }
};
</script>

<style scoped lang="scss">
#ix-home {
  overflow: hidden;
  min-width: 320px;
  &::before {
    clear: both;
    content: "";
    display: block;
    overflow: auto;
  }
  height: 100%;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
