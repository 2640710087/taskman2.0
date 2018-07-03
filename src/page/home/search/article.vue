<template>
<div class="ix-search-article">
   <ISC ref="ISC">
    <div class="ix-article-viewport-container" v-if="articles.length">
      <div class="ix-article-viewport">
        <Cardlist :articlelist="articles"></Cardlist>
      </div>
    </div>
    <div v-else class="ix-nofound">{{ loading }}</div>
  </ISC>
  
</div>
</template>

<script>
import { Cardlist } from "@@/card";
import ISC from "@@/iscroll";
export default {
  data() {
    return {
      loading: "加载中…"
    };
  },
  computed: {
    articles() {
      return this.$store.getters.getArticle;
    }
  },
  components: {
    ISC,
    Cardlist
  },
  mounted() {
    if (!this.articles.length) {
      setTimeout(() => {
        this.loading = "无结果";
      }, 800);
    }
  }
};
</script>

<style scoped lang="scss">
.ix-article-viewport-container {
  padding-top: 10px;
  display: flex;
  justify-content: center;
}
.ix-search-article {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}
.ix-article-viewport {
  width: 100%;
  max-width: 800px;
}
</style>