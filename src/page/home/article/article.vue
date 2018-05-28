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
      <Loading v-if="!article" >文章加载中...</Loading>
    </div>
  </div>
</template>

<script>
import { Cardlist } from "@@/card";
import ISC from "@@/iscroll";
import { getArtList } from "@/plugins/senddata";
import Loading from "@@/loading";
export default {
  data() {
    return {
      article: null
    };
  },
  methods: {},
  async mounted() {
    getArtList()
      .then(res => {
        if (res.code < 300 && res.article) {
          let { code, article } = res;
          this.article = article;
          return true;
        } else {
          return false;
        }
      })
      .then(res => {
        if (res)
          setTimeout(() => {
            this.$store.commit("refresh");
          }, 0);
        else console.log("get article failed!");
      })
      .catch(e => {
        console.log(`Error message: ${e.message}`);
      });
  },
  components: {
    Cardlist,
    ISC,
    Loading
  }
};
</script>

<style scoped lang="scss">
.ix-article {
  width: 100%;
  display: flex;
  height: 100%;
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
    }
  }
}
</style>
