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
import { getArtList } from "@/plugins/senddata";
export default {
  data() {
    return {
      article: null
    };
  },
  methods: {},
  mounted() {
    getArtList().then(res => {
      this.article = res.article;
      setTimeout(() => {
        this.$store.state.ISCROLL.iscroll.refresh();
      }, 0);
    });
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
  // 水平居中
  justify-content: center;
  // 垂直居中 align-items
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
    width: 100%;
    max-width: 800px;
    padding: {
      top: 20px;
      //   bottom: 100px;
    }
  }
}
</style>
