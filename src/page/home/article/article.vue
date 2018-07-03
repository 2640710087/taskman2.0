<template>
  <div class="ix-article">
    <div class="ix-article-container">
      <ISC ref="ISC">
        <div class="ix-article-viewport-container">
          <div class="ix-article-viewport">
            <Cardlist :articlelist="article"></Cardlist>
          </div>
        </div>
      </ISC>
      <Loading v-if="loading" >文章加载中...</Loading>
      <transition name="fade">
        <div class="ix-tip-box" v-if="tip">网络错误</div>
      </transition>
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
      article: null,
      loading: false,
      tip: false
    };
  },
  methods: {},
  async mounted() {
    this.loading = true;
    getArtList()
      .then(res => {
        this.loading = false;
        if (res.code < 300 && res.article) {
          let { code, article } = res;
          this.article = article;
          return true;
        } else {
          return false;
        }
      })
      .then(res => {
        if (!res) console.log("get article failed!");
      })
      .catch(e => {
        this.loading = false;
        setTimeout(() => {
          this.tip = true;
        }, 500);
        console.log(`Error message: ${e.message}`);
      });
  },
  watch: {
    article() {
      this.$nextTick(() => {
        if (this.$refs.ISC) this.$refs.ISC.refresh();
      });
    },
    $route() {
      this.$nextTick(() => {
        if (this.$refs.ISC) this.$refs.ISC.refresh();
      });
    }
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
.ix-tip-box {
  height: 30px;
  width: 120px;
  color: white;
  background: rgba(28, 36, 56, 0.8);
  border-radius: 4px;
  position: fixed;
  bottom: 10%;
  left: 50%;
  margin-left: -60px;
  margin-top: -15px;
  line-height: 30px;
  text-align: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.6);
}
</style>
