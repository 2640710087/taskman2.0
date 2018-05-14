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
  computed: {},
  methods: {
    _initScroll(state) {
      let iscroll = new IScroll(this.$refs.viewport, {
        scrollbars: false,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: "scale",
        fadeScrollbars: true,
        click: true,
        scrollbars: "custom",
        taps: true
      });
      this.$store.state.ISCROLL.iscroll = iscroll;
    },
    isPassive() {
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
  },
  mounted: function() {
    this._initScroll();
    document.addEventListener(
      "touchmove",
      function(e) {
        e.preventDefault();
      },
      this.isPassive()
        ? {
            capture: false,
            passive: false
          }
        : false
    );
    this.$store.state.ISCROLL.iscroll.on("beforeScrollStart", function() {
      document.activeElement.blur();
    });
  }
};
</script>

<style scoped lang="scss">
#ix-viewport {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;

  //   .ix-viewport-item {
  //     // width: 100%;
  //     // margin: {
  //     //   left: auto;
  //     //   right: auto;
  //     // }
  //   }
}
</style>
