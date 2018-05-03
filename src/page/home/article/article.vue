<template>
  <div class="ix-article">
    <div class="ix-article-container"> 
      <ISC>
        <div class="ix-article-viewport-container">
          <div class="ix-article-viewport">
            <Cardlist :articlelist="article"></Cardlist>
          </div>
        </div>
      </ISC>
    </div>
  </div>
</template>

<script>
import { Cardlist } from "@@/card";
import ISC from "@@/iscroll";

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
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
        },
        {
          aid: "1",
          username: "virgin-forest",
          time: "0000-00-00 00:00:00",
          title: "test title",
          summary: "test summary",
          location: "./html/2018.html",
          tag: ["Python", "JavaScript", "Java", "PHP", "agli"]
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
  components: {
    Cardlist,
    ISC
  }
};
</script>

<style scoped lang="scss">
.ix-article {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 56px;
  height: calc(100% - 56px);
  .ix-article-container {
    width: 100%;
    position: relative;
  }
}
.ix-article-viewport-container {
  width: 100%;
  display: flex;
  justify-content: center;
  .ix-article-viewport {
    max-width: 800px;
  }
}
</style>