<template>
  <header class="ix-header">
    <div class="ix-container d-flex">
      <div class="ix-nav">
        <nav>
          <ul class="ix-flex">
            <li>
              <a href="/#/home" class="ix-logo">
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="ix-d-flex d-flex ix-min-w">
        <search></search>
      </div>
      <div class="ix-flex">
        <!-- <div class="ix-d-flex ix-ml-4">
          <a href="" class="ix-a-font">Sign in</a>
          and
          <a href="" class="ix-a-font">Sign up</a>
        </div> -->
        <div class="ix-user-icon">
          <a href="/#/user" class="user-icon">
            <Icon type="person" size="18"></Icon>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import search from "../search";
import { Icon } from "iview";
export default {
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
  background-color: #2a303c;
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
    height: 40px;
    line-height: 30px;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    .ix-nav {
      .ix-flex {
        display: flex;
        align-items: center;
        li {
          height: 40px;
          line-height: 30px;
          word-break: keep-all;
          padding: {
            top: 5px;
            bottom: 5px;
          }
          .ix-logo {
            margin: {
              left: 16px;
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
      margin: {
        left: 16px;
        right: 16px;
      }
    }
    .ix-flex {
      display: flex;
      align-items: center;
      .ix-ml-4 {
        margin-left: 24px;
      }
      .ix-user-icon {
        margin: {
          left: 16px;
          right: 16px;
        }
        .user-icon {
          display: block;
          width: $logo-hw;
          height: $logo-hw;
          border-radius: 50%;
          border: 2px white solid;
          text-align: center;
        }
      }
    }
  }
}
</style>