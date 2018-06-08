<template>
<div class="ix-search-article">
   <ISC v-if="articles.length > 0">
    <div class="ix-article-viewport-container">
      <div class="ix-article-viewport">
        <Cardlist :articlelist="articles"></Cardlist>
      </div>
    </div>
  </ISC>
  <div v-else class="ix-nofound">{{ loading }}</div>
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
    if (this.articles.length === 0) {
      setTimeout(() => {
        this.loading = "无结果";
      }, 800);
    }
  },
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