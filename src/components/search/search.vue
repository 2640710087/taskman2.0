<template>
  <div id="ix-search-container">
    <div class="ix-search d-flex-center" :class="{'ix-search-focus': focus}">
      <label for="input" class="ix-search-icon-container d-flex-center">
        <Icon type="ios-search-strong" size="20" class="ix-search-icon"></Icon>
        <span v-if="!input">Search Forest</span>
      </label>
      <!-- placeholder="Search Forest" -->
      <input id="input" type="text" class="ix-search-input"  v-model="input"
      @focus="$handleFocus"
      @key.enter="$handleEnter"
      @keydown="$handleKeydown"
      @keypress="$handleKeypress"
      @input="$handleInput"
      @keyup="$handleKeyup"
      @change="$handleChange"
      @blur="$handleBlur"
      >
    </div>
  </div>
</template>

<script>
import { Icon } from "iview";
export default {
  data() {
    return {
      input: null,
      focus: false
    };
  },
  methods: {
    $handleEnter(event) {
      this.$emit("enter", event);
    },
    $handleInput(event) {
      this.$emit("$input", this.input);
      this.$emit("$on-change", event);
    },
    $handleChange(event) {
      this.$emit("$input-change", event);
    },
    $handleFocus(event) {
      this.focus = true;
      this.$emit("$focus", event);
    },
    $handleBlur(event) {
      this.focus = false;
      this.$emit("$blur", event);
    },
    $handleKeypress(event) {
      this.$emit("$keypress", event);
    },
    $handleKeyup(event) {
      this.$emit("$keyup", event);
    },
    $handleKeydown(event) {
      this.$emit("$keydown", event);
    }
  },
  components: {
    Icon
  }
};
</script>

<style scoped lang="scss">
#ix-search-container {
  height: 30px;
  line-height: 30px;
  width: 100%;

  .ix-search-focus {
    background: #fff !important;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.2);
  }
  .ix-search {
    transition: 0.2s all;
    height: 100%;
    width: 100%;
    background: #40484e;
    border-radius: 20px;
    position: relative;
    .ix-search-icon-container {
      position: absolute;
      justify-content: center;
      width: 100%;
      .ix-search-icon {
        color: #666a6d;
        padding: 0 8px;
      }
    }

    .ix-search-input {
      // position: absolute;
      z-index: 100;
      height: 100%;
      width: 100%;
      background: none;
      outline: none;
      color: #000;
      font-size: 14px;
      &::-moz-placeholder {
        color: #666a6d;
      }
      &::-webkit-input-placeholder {
        color: #666a6d;
      }
      &:-ms-input-placeholder {
        color: #666a6d;
      }
    }
  }
}
</style>