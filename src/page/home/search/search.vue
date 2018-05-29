<template>
    <div class="ix-page-search">
      <div class="ix-tabs">
        <div class="ix-tabs-bar">
          <div class="ix-tabs-bar-nav-item">文章</div>
          <div class="ix-tabs-bar-nav-item">标签</div>
          <div class="ix-tabs-bar-nav-item">用户</div>
        </div>
        <div class="ix-tabs-content">
          <div class="ix-tabs-content-item">article</div>
          <div class="ix-tabs-content-item">label</div>
          <div class="ix-tabs-content-item">user</div>
        </div>
      </div>
    </div>
</template>

<script>
import { search, checkToken } from "@/plugins/senddata";
import { setStorage, getStorage } from "@/config/other";
export default {
  data() {
    return {
      tags: [],
      articles: [],
      users: [],
      searchHistory: ["zhongqi"]
    };
  },
  computed: {},

  methods: {
    async getSearch(query) {
      let { article, tag, user } = await search(query);
      this.articles = article;
      if (typeof tag === "string") {
        this.tags = tag.split(",");
      } else {
        this.tags = tag;
      }
      this.users = user;
    },
    setSearchHistory() {
      let { searchHistory } = this;
      setStorage("searchHistory", searchHistory);
    },
    getSearchHistory() {
      let searchHistory = getStorage("searchHistory");
      this.searchHistory = searchHistory;
    }
  },
  async mounted() {
    let { query } = this.$route.params;
    if (query) {
      this.getSearch(query);
    }
  },
  watch: {
    $route(Val, oldVal) {
      let { query } = Val.params;
      if (query) {
        this.getSearch(query);
      }
    },
    setSearchHistory(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.ix-page-search {
  .ix-tabs-bar {
    display: flex;
  }
  .ix-tabs-bar-nav-item {
    width: 100%;
  }
  .ix-tabs-content {
    display: flex;
  }
  .ix-tabs-content-item {
    flex-shrink: 0;
    width: 100%;
  }
}
</style>