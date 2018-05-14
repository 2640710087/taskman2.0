<template>
  <header class="ix-header">
    <div class="ix-container d-flex">
      <div class="ix-nav">
        <a href="/#/" class="ix-logo"></a>
      </div>
      <div class="ix-d-flex d-flex ix-min-w">
        <search></search>
      </div>
      <div class="ix-user-menu">
        <div class="ix-user-icon" @click.stop="$handleAnimation">
            <Icon type="more" size="32"></Icon>
        </div>
        <!--  -->
        <div class="ix-user-active-list" :style="{'opacity': menu.opacity, 'display': menu.display}" >
            <div class="ix-user-active-over">
                <ul v-if="!username">
                    <li @click="$router.push('/login')">
                        <span class="ix-icon">
                            <Icon type="log-in"></Icon>
                        </span>
                        <span class="ix-word">
                            登录
                        </span>
                    </li>
                    <li  v-if="!username" @click="$router.push('/register')">
                        <span class="ix-icon">
                            <Icon type="edit"></Icon>
                        </span>
                        <span class="ix-word">
                            注册
                        </span>
                    </li>
                </ul>
                <ul v-else>
                    <li  @click="$router.push(`/article/user/${username}`)">
                        <span class="ix-icon">
                            <Icon type="person"></Icon>
                        </span>
                        <span class="ix-word">
                            {{ username }}
                        </span>
                    </li>
                    <li v-if="username" @click="$router.push(`/article/upload/${username}`)">
                        <span class="ix-icon">
                            <Icon type="ios-cloud-upload"></Icon>
                        </span>
                        <span class="ix-word">
                            上传文章
                        </span>
                    </li>
                    <li v-if="username" @click="$handleClick('loginOUt', $event)">
                        <span class="ix-icon">
                            <Icon type="log-out"></Icon>
                        </span>
                        <span class="ix-word">
                            退出登录
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="ix-menu-mask"  v-if="menu.mask" @click="$handleAnLeave(400)"></div>
      </div>

    </div>
  </header>
</template>

<script>
import search from "../search";
import { Icon } from "iview";
export default {
  data() {
    return {
      menu: {
        opacity: 0,
        display: "none",
        mask: false
      }
    };
  },
  computed: {
    username() {
        return this.$store.state.USER_INFO.username;
    }
  },
  methods: {
    $handleAnimation() {
      let [display, optaicy] = [this.menu.display, this.menu.opacity];
      if (display === "none") {
        this.$handleAnEnter();
      } else {
        this.$handleAnLeave(400);
      }
    },
    $handleAnEnter() {
      this.menu.display = "block";
      setTimeout(() => (this.menu.opacity = 1), 10);
      this.menu.mask = true;
    },
    $handleAnLeave(animationTime) {
      setTimeout(() => (this.menu.display = "none"), animationTime);
      this.menu.opacity = 0;
      this.menu.mask = false;
    },
    $handleClick(event, e) {
      this.$emit(event, e);
    }
  },
  mounted() {},
  components: {
    search,
    Icon
  }
};
</script>

<style scoped lang="scss">
@import "../../style/mixin.scss";
$logo-hw: 32px !default;
@media (min-width: 1000px) and (max-width: 1200px) {
  .ix-container {
    width: 90% !important;
  }
  .ix-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
@media (min-width: 1201px) {
  .ix-container {
    width: 72% !important;
  }
  .ix-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
.ix-header {
  @include font(14px, 14px);
  background-color: rgba(28, 36, 56, 1);
  width: 100%;
  height: 56px;
  padding: 8px 0;
  z-index: 9999999;
  position: absolute;
  a {
    color: white;
  }
  .ix-container {
    max-width: 960px;
    min-width: 320px;
    position: relative;
    height: 40px;
    line-height: 30px;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    .ix-nav {
      .ix-logo {
        margin: {
          left: 8px;
          right: 16px;
        }
        display: block;
        width: $logo-hw;
        height: $logo-hw;
        background-size: $logo-hw;
        background-repeat: no-repeat;
        overflow: hidden;
        background-image: url("../../images/logo.png");
      }
    }
    .ix-d-flex {
      align-items: center;
      .ix-a-font {
        @include sc(14px, white);
        font-weight: 600;
      }
    }
    .ix-min-w {
      width: 100%;
      max-width: 600px;
      min-width: 160px;
    }

    .ix-user-menu {
      display: flex;
      position: relative;
      height: 32px;
      margin: {
        left: 16px;
        right: 8px;
      }
      .ix-user-icon {
        width: 32px;
        height: 32px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }

      .ix-menu-mask {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 100;
      }

      .ix-user-active-list {
        // 媒体查询
        @media screen and (max-width: 480px) {
          width: 100%;
          top: 56px;
          right: 0;
          margin-top: -5px;
          box-shadow: 0px 2px 33px 0px rgba(28, 36, 56, 0.3);
          background: rgba(28, 36, 56, 1);
          color: white;
          position: fixed;
        }
        z-index: 101;
        transition: opacity 0.4s;
        display: none;
        opacity: 0;
        background: white;
        position: absolute;
        width: 160px;
        padding: 5px 0px;
        border: {
          top-left-radius: 5px;
          top-right-radius: 5px;
          bottom-left-radius: 5px;
          bottom-right-radius: 5px;
        }
        top: 100%;
        right: -4px;
        left: auto;
        margin-top: 4px;
        box-shadow: 1px 1px 3px rgba(26, 26, 26, 0.1);
        border: 1px solid rgba(28, 36, 56, 0.1);
        &::before {
          content: " ";
          display: inline-block;
          position: absolute;
          right: 12px;
          top: -14px;
          border: 7px solid transparent;
          border-bottom-color: white;
          @media screen and (max-width: 480px) {
            right: 16px;
            border-bottom-color: rgba(28, 36, 56, 0.99);
          }
        }
        .ix-user-active-over {
          overflow: hidden;
          width: 100%;
          height: 100%;
          li {
            cursor: pointer;
            padding: 2px 8px;
            transition: all 0.2s;
            user-select: none;
            &:hover {
              background: rgba(28, 36, 56, 0.1);
              @media screen and (max-width: 480px) {
                background: rgba(220, 220, 220, 0.1);
              }
            }
            .ix-icon {
              margin: 0 4px;
            }
            .ix-word {
              margin: 0 4px;
            }
          }
        }
      }
    }
  }
}
</style>
