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
      this.$store.state.Iscroll.iscroll = new IScroll(this.$refs.viewport, {
        scrollbars: false,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: "scale",
        fadeScrollbars: true,
        click: true,
        scrollbars: "custom"
      });
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
    this.$store.state.Iscroll.iscroll.on("beforeScrollStart", () => {
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
