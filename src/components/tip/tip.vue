<template>
  <div class="tip" :class="{'tip-arrow': arrow}" v-if="code > 300">
    <slot>
      <div class="code-tip">
        <Icon type="close-circled" color="red" :size="12" class="tip-icon"></Icon>
        {{ content }}
      </div>
    </slot>
  </div>
</template>

<script>
import { Icon } from 'iview';
export default {
  computed: {
    content() {
      if (this.code > 300) {
        return this.$codeMsg(this.code, this.Lang);
      }
    }
  },
  components: {
    Icon
  },
  props: {
    code: {
      type: String | Number,
      default() {
        return;
      }
    },
    Lang: {
      type: String,
      default() {
        return window.localStorage.lang || this.$Lang;
      }
    },
    arrow: {
      type: Boolean | String,
      default() {
        return false;
      }
    },
    show: {
      type: Boolean | String,
      default: false
    }
  }
};
</script>

<style scoped>
.tip {
  color: white;
}
.tip-arrow {
  line-height: 17px;
  margin-top: 12px;
  z-index: 998;
  background: rgba(180, 180, 180, 0.4);
  padding: 5px;
  border-radius: 4px;
  position: relative;
  user-select: none;
}
.tip-arrow::after {
  content: " ";
  width: 0;
  height: 0;
  position: absolute;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  top: -10px;
  left: 10px;
  border-bottom-color: rgba(180, 180, 180, 0.4);
}

.tip-text {
  display: inline-block;
}
.code-tip {
  line-height: 18px;
  padding: 5px 0;
}
</style>