<template>
    <div id="ix-viewport" ref="viewport">
        <div class="ix-viewport-item">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import IScroll from "iscroll";
export default {
  methods: {
    _initScroll() {
      this.iscroll = new IScroll(this.$refs.viewport, {
        scrollbars: false,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: "scale",
        fadeScrollbars: true,
        click: true,
        scrollbars: "custom"
      });
    }
  },
  mounted: function() {
    this._initScroll();
    this.iscroll.on("beforeScrollStart", () => {
      document.activeElement.blur();
    });
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
  }
};
</script>

<style scoped lang="scss">
#ix-viewport {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .ix-viewport-item {
    // width: 100%;
    margin: {
      left: auto;
      right: auto;
    }
  }
}
</style>