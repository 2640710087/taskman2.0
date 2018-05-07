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
        <ul class="ix-user-active-list" :style="{'opacity': menu.opacity, 'display': menu.display}">
          <li style="display: flex; align-items: center;">
            <img src="@/assets/logo.png" alt="forest" height="20" width="20" style="border-radius: 4px;">
            <span style="display: inline-block; margin-left: 10px;">
              <a href="/#/login">
                sign in
              </a>
              <span>
                or
              </span>
              <a href="/#/register">
                Sign up
              </a>

            </span>
          </li>
          <li>Add article</li>
          <li>Sign out</li>
        </ul>
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
      setTimeout(() => (this.menu.opacity = 1), 0);
      this.menu.mask = true;
    },
    $handleAnLeave(animationTime) {
      setTimeout(() => (this.menu.display = "none"), animationTime);
      this.menu.opacity = 0;
      this.menu.mask = false;
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
      .ix-user-sign {
        a {
          font-weight: 600;
        }
        span {
          margin: 0 4px;
          color: #586069 !important;
        }
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
      .ix-user-active-list-animation {
        display: block !important;
        opacity: 1 !important;
      }
      .ix-menu-mask {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 100;
        background: rgba(220, 220, 220, 0.1);
      }
      .ix-menu-mask-d {
        display: block;
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
        box-shadow: 0px 8px 33px 0px rgba(28, 36, 56, 0.1);
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
        li {
          cursor: pointer;
          padding: 2px 10px;
          transition: all 0.2s;
          user-select: none;
          &:hover {
            background: rgba(28, 36, 56, 0.1);
            @media screen and (max-width: 480px) {
              background: rgba(220, 220, 220, 0.1);
            }
          }
        }
      }
    }
  }
}
</style>
