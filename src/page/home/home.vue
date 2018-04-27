<template>
  <div id="ix-home">
    <Header></Header>
    <div id="ix-viewport" ref="viewport">
      <div class="ix-article-item">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@@/header";
import Lable from "@@/lable";
import IScroll from "iscroll";
import Card from "@@/card";
function isPassive() {
  var supportsPassiveOption = false;
  try {
    addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassiveOption = true;
        }
      })
    );
  } catch (e) {}
  return supportsPassiveOption;
}

export default {
  methods: {
    _initScroll() {
      console.log(this.$refs.viewport);
      this.iscroll = new IScroll(this.$refs.viewport, {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: "scale",
        fadeScrollbars: true
      });
    }
  },
  mounted: function() {
    this._initScroll();
    document.addEventListener(
      "touchmove",
      function(e) {
        e.preventDefault();
      },
      isPassive()
        ? {
            capture: false,
            passive: false
          }
        : false
    );
  },
  components: {
    Header,
    Lable,
    Card
  }
};
</script>

<style scoped lang="scss">
#ix-home {
  position: absolute;
  &::before {
    clear: both;
    content: "";
    display: block;
    overflow: auto;
  }
  height: 100%;
  width: 100%;
  #ix-viewport {
    background: #f4f5f5;
    position: absolute;
    overflow: hidden;
    margin-top: 56px;
    width: 100%;
    height: calc(100% - 56px);
  }
}
</style>