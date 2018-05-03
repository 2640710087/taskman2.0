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
        <div class="ix-user-icon" @click="$handleAnimation">
            <Icon type="more" size="24"></Icon>
        </div>
        <ul class="ix-user-active-list" :style="{'opacity': menu.opacity, 'display': menu.display}">
          <li> forest</li>
          <li>添加文章</li>
          <li>用户中心</li>
          <li>退出登录</li>
        </ul>
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
        display: "none"
      }
    };
  },
  methods: {
    $handleAnimation() {
      let [display, optaicy] = [this.menu.display, this.menu.opacity];
      let animationTime = 200;
      if (display === "none") {
        this.menu.display = "block";
        setTimeout(() => (this.menu.opacity = 1), animationTime);
      } else {
        setTimeout(() => (this.menu.display = "none"), animationTime);
        this.menu.opacity = 0;
      }
    }
  },
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
    max-width: 1024px;
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
      min-width: 100px;
      // margin: {
      //   left: 8px;
      //   right: 8px;
      // }
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
        transition: all 0.4s;
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
        margin-top: 12px;
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