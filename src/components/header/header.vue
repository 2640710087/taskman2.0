<template>
  <header class="ix-header">
    <div class="ix-container d-flex">
      <div class="ix-nav">
        <div @click="$router.go(-1)" v-if="search" class="ix-cancel">
          <Icon type="ios-arrow-back" size="24" class="ix-back"></Icon>
        </div>
        <slot name="logo" v-else></slot>
      </div>
      <div class="ix-d-flex d-flex ix-min-w">
        <search slot="search" :display="search"></search>
      </div>
      <div class="ix-user-menu">
        <div class="ix-user-icon" @click="$handleAnimation">
            <Icon type="more" size="30" ></Icon>
        </div>

        <!--  -->
        <slot name="menu" v-if="!search"></slot>
        
      </div>

    </div>
  </header>
</template>

<script>
import userMenu from "../menu";
import search from "@@/search";
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
    search() {
      let fullpath = this.$route.fullPath;
      let pathRegex = /^\/(search)(?:\/.*)?$/i;
      return pathRegex.test(fullpath);
    }
  },
  methods: {
    $handleAnimation() {
      this.$emit("clickMenu");
    },
    $handleAnLeave() {
      this.$emit("clickMask");
    }
  },
  mounted() {},
  components: {
    Icon,
    search
  }
};
</script>

<style scoped lang="scss">
@import "../../style/mixin.scss";

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
  position: fixed;
  top: 0;
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
      margin-left: 8px;
    }
    .ix-d-flex {
      align-items: center;
      .ix-a-font {
        @include sc(14px, white);
        font-weight: 600;
      }
    }
    .ix-min-w {
      transition: all 2s;
      margin: {
        left: 10px;
        right: 10px;
      }
      width: 100%;
      max-width: 600px;
      min-width: 160px;
    }

    .ix-user-menu {
      display: flex;
      position: relative;
      height: 32px;
      width: 32px;
      justify-content: center;
      margin: {
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

      // @keyframes fade-menu {
      //   from {
      //     top: 46px;
      //     opacity: 0;
      //   }
      //   to {
      //     top: 56px;
      //     opacity: 1;
      //   }
      // }
    }
  }
}
.ix-cancel {
  color: #ccc;
  width: 32px;
  transform-origin: center;
  display: flex;
  align-content: center;
  justify-content: center;
}
.ix-back {
  line-height: 30px;
}
</style>
