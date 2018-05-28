<template>
  <div id="ix-home">
    <Header @clickMenu="handleDisplay" @clickMask="handleDisplay">
      <router-link to="/" class="ix-logo" slot="logo"></router-link>
      <userMenu :username="username" :display="display" slot="menu" @clickemit="handleDisplay"></userMenu>
    </Header>
    <transition name="slide-fade" mode="out-in">
      <div class="ix-home-container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from "@@/header";
import userMenu from "@@/menu";
import { checkToken } from "@/plugins/senddata";
export default {
  data() {
    return {
      display: false
    };
  },
  methods: {
    handleDisplay() {
      this.display = !this.display;
    }
  },
  computed: {
    username() {
      return this.$store.state.USER_INFO.username;
    }
  },
  mounted() {
    let { username, token } = this.$store.getters.getUserInfo;
    console.log(username, token);
    checkToken(username, token);
  },
  components: {
    Header,
    userMenu
  }
};
</script>

<style scoped lang="scss">
$logo-hw: 32px !default;
#ix-home {
  // overflow: hidden;
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
.ix-home-container {
  margin-top: 56px;
  width: 100%;
  height: calc(100% - 56px);
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

.ix-logo {
  display: block;
  width: $logo-hw;
  height: $logo-hw;
  background-size: $logo-hw;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: url("../../images/logo.png");
}
</style>
