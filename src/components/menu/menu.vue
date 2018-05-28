<template>
    <div>
        <transition name="fade">
            <div class="ix-user-active-list"   v-if="display">
                <div class="ix-user-active-over">
                    <ul v-if="!username">
                        <li @click="handleClick('login')">
                            <span class="ix-icon">
                                <Icon type="log-in"></Icon>
                            </span>
                            <span class="ix-word">
                                登录
                            </span>
                        </li>
                        <li  v-if="!username" @click="handleClick('register')">
                            <span class="ix-icon">
                                <Icon type="edit"></Icon>
                            </span>
                            <span class="ix-word">
                                注册
                            </span>
                        </li>
                    </ul>
                    <ul v-else>
                        <li  @click="handleClick('username')">
                            <span class="ix-icon">
                                <Icon type="person"></Icon>
                            </span>
                            <span class="ix-word">
                                {{ username }}
                            </span>
                        </li>
                        <li v-if="username" @click="handleClick('upload')">
                            <span class="ix-icon">
                                <Icon type="ios-cloud-upload"></Icon>
                            </span>
                            <span class="ix-word">
                                上传文章
                            </span>
                        </li>
                        <li v-if="username" @click="handleClick('loginOUt', $event)">
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
        </transition>
        <div class="ix-menu-mask" @click="handleClickMenu"  v-if="display"></div>
    </div>
</template>

<script>
import { Icon } from "iview";
export default {
  props: {
    username: {
      type: String
    },
    display: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(type) {
      if (type == "login" || type == "register" || type == "upload")
        this.$router.push(`/${type}`);
      else if (type == "username") this.$router.push(`/user/${this.username}`);
      else this.$emit("logout", this.username);

      this.handleClickMenu();
    },
    handleClickMenu() {
      this.$emit("clickemit");
    }
  },
  components: {
    Icon
  }
};
</script>

<style scoped lang="scss">
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
    box-shadow: 0px 4px 33px 0px rgba(28, 36, 56, 0.1);
    background: rgba(28, 36, 56, 1);
    color: white;
    position: fixed;
  }
  // // 动画名称
  // animation-name: fade-menu;
  // // 规定动画完成一个周期所花费的秒或者毫秒，默认为0.
  // animation-duration: 0.2s;
  // // 规定动画的速度曲线，默认是“ease”
  // animation-timing-function: ease-in-out;
  // // 规定动画何时开始，默认是0
  // animation-delay: 0;
  // // 规定动画被播放的次数。默认是1
  // animation-iteration-count: 1;
  // // 规定动画是否在下一周期逆向播放。 默认是“normal”
  // animation-direction: normal;
  // //规定动画是否正在运行或暂停。默认是running
  // animation-play-state: running;
  z-index: 101;
  // transition: opacity 0.4s;
  // display: none;
  // opacity: 0;
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
      display: none;
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
</style>