<template>
  <div id="card">
    <div class="card-container d-flex">
      <div class="card-head">
        <slot name="title"></slot>
        <Icon type="ios-more" class="card-more-icon"></Icon>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "iview";
export default {
  props: {
    type: {},
    title: {}
  },
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
$border-color: #e9eaec;
$font-size: 18px;
#card {
  width: 100%;
  .d-flex {
    display: flex;
  }
  .card-container {
    border: {
      radius: 4px;
      color: $border-color;
      style: solid;
      width: 1px;
    }
    overflow: hidden;
    flex-direction: column;
    .card-head {
      line-height: 32px;
      // height: 32px;
      position: relative;
      .card-more-icon {
        position: absolute;
        right: 20px;
        top: 12px;
      }
      border-bottom: solid 1px $border-color;
      font-size: $font-size;
      padding: 4px 12px;
    }
    .card-body {
      min-height: 90px;
      padding: 10px 12px;
    }
  }
}
</style>