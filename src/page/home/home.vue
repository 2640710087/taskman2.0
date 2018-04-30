<template>
  <div id="ix-home">
    <Header></Header>
    <div id="ix-viewport" ref="viewport">
      <div class="ix-article-item">
        <div style="height: 56px;"></div>
        <Cardlist :articlelist="article"></Cardlist>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@@/header";
import Lable from "@@/lable";
import IScroll from "iscroll";
import { Card } from "@@/card";
import { Cardlist } from "@@/card";

export default {
  data() {
    return {
      article: [
        {
          aid: "6",
          username: "virgin-forest",
          time: "2018-04-26 12:00:35",
          title: "程序猿，你和BUG有什么故事吗？",
          summary:
            "五年前： // 其实这张图也有bug，system.out.println(); 五年后： 第一次做项目直接一个rm -rf / 删库了算不算…………好在…",
          location: "./html/2018.html",
          tag: "Python,JavaScript,Java,PHP"
        },
        {
          aid: "5",
          username: "virgin-forest",
          time: "2018-04-26 12:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: "Python,JavaScript,Java,PHP"
        },
        {
          aid: "4",
          username: "virgin-forest",
          time: "2018-04-26 11:59:34",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: "Python,JavaScript,Java,PHP"
        },
        {
          aid: "3",
          username: "virgin-forest",
          time: "2018-04-26 11:59:16",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: "Python,JavaScript,Java,PHP"
        },
        {
          aid: "2",
          username: "virgin-forest",
          time: "2018-04-26 11:58:09",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: "Python,JavaScript,Java,PHP"
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
        }
      ]
    };
  },
  methods: {
    _initScroll() {
      this.iscroll = new IScroll(this.$refs.viewport, {
        scrollbars: true,
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
  },
  components: {
    Header,
    Lable,
    Card,
    Cardlist
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
    position: absolute;
    overflow: hidden;
    // margin-top: 56px;
    width: 100%;
    height: calc(100% - 0px);

    .ix-article-item {
      max-width: 694px;
      width: 100%;
      margin: {
        top: 14px;
        left: auto;
        right: auto;
      }
    }
  }
}
</style>