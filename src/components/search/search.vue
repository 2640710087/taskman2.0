<template>
  <div id="ix-search-container">
    <div class="ix-search">
      <Icon type="ios-search-strong" size="20" class="ix-search-icon"></Icon>
      <input type="text" class="ix-search-input" placeholder="Search">
    </div>
  </div>
</template>

<script>
import { Icon } from "iview";
export default {
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
  .ix-search {
    height: 100%;
    width: 100%;
    background: #3f4448;
    border-radius: 4px;
    display: flex;
    align-items: center;
    .ix-search-icon {
      padding: 0 8px;
    }
    .ix-search-input {
      &::-moz-placeholder {
        color: #666a6d;
      }
      &::-webkit-input-placeholder {
        color: #666a6d;
      }
      &:-ms-input-placeholder {
        color: #666a6d;
      }
      height: 100%;
      width: 100%;
      background: none;
      outline: none;
      color: white;
      font-size: 14px;
    }
  }
}
</style>