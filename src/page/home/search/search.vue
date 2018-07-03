<template>
    <div class="ix-page-search">
      <div class="ix-tabs" v-if="query">
        <div class="ix-tabs-bar-container">
          <div class="ix-tabs-bar">
            <div class="ix-tabs-bar-nav-item" @click="switchSearchType(index)" v-for="(tab, index) in tabs" :key="index">{{ tab }}</div>
            <div class="ix-tabs-bar-nav-item ix-tabs-line-container" :style="{transform: `translate(${tabIndex * 100}%)`}">
              <span class="ix-tabs-line"></span>
            </div>
          </div>
        </div>
        <div class="ix-tabs-content">
          <div class="ix-tabs-content-item">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
      <div class="ix-search-history" v-else>
        <ISC ref="ISC">
          <div class="ix-search-history-container">
            <div class="ix-search-history-content">
              <div class="ix-search-clear" v-if="searchHistory.length > 0">
                <div>搜索历史</div>
                  <span class="ix-history-remove" @click="clearHistory">
                    <Icon type="ios-trash-outline"></Icon>
                    <span style="font-size: 12px;margin-left: 6px;">清空</span>
                  </span>
              </div>
                <div class="ix-search-history-item" v-for="(history, index) of searchHistory" :key="index">
                  <div class="ix-history-content" @click="useHistory(history)">
                    <span class="ix-history-icon"></span>
                    <span class="ix-history-text">{{ history }}</span>
                  </div>
                  <span class="ix-history-remove" @click="removeHistory(index)">
                    <Icon type="close-round"></Icon>
                  </span>
                </div>
            </div>
          </div>
          <div v-if="searchHistory.length == 0" class="ix-nofound">无搜索记录</div>
        </ISC>
      </div>
    </div>
</template>

<script>
import { search, checkToken } from "@/plugins/senddata";
import { setStorage, getStorage } from "@/config/other";
import { Cardlist } from "@@/card";
import { Icon } from "iview";
import ISC from "@@/iscroll";
import { getArtList } from "@/plugins/senddata";
export default {
  data() {
    return {
      tabs: ["文章", "标签", "用户"],
      typeList: ["article", "label", "user"],
      searchHistory: [],
      tabType: "article",
      modal2: true
    };
  },

  computed: {
    tabIndex() {
      let type = this.$store.getters.getType;
      return this.typeList.indexOf(type);
    },
    query() {
      let { query } = this.$store.getters.getSearch;
      return query;
    }
  },
  methods: {
    useHistory(history) {
      let type = this.$store.getters.getType;
      let path = `/search/${type}/${encodeURIComponent(history)}`;
      this.$store.commit("query", history);
      this.$router.replace(path);
    },
    switchSearchType(index) {
      let typeList = ["article", "label", "user"],
        { query } = this.$route.params;
      this.$store.commit("setType", typeList[index]);
      this.$router.replace(
        `/search/${typeList[index]}/${encodeURIComponent(query)}`
      );
    },
    addSearchHistory(query) {
      let history = this.searchHistory;
      let historyExist = history.includes(query);
      if (historyExist) {
        let index = history.indexOf(query);
        if (index != 0) {
          history.splice(index, 1);
          this.searchHistory = [query, ...history];
        }
      } else {
        this.searchHistory = [query, ...history];
      }
    },
    removeHistory(index) {
      this.searchHistory.splice(index, 1);
    },
    clearHistory() {
      let len = this.searchHistory.length;
      this.searchHistory.splice(0, len);
    },
    setSearchHistory() {
      let { searchHistory } = this;
      setStorage("searchHistory", JSON.stringify(searchHistory));
    },
    getSearchHistory() {
      let searchHistory = getStorage("searchHistory");
      if (searchHistory) {
        this.searchHistory = JSON.parse(searchHistory);
      }
    }
  },
  async mounted() {
    let { query } = this.$route.params;
    if (query) {
      // this.getSearch(query);
      this.addSearchHistory(query);
    }
    this.getSearchHistory();
  },
  watch: {
    $route(Val, oldVal) {
      let { query } = Val.params;
      if (query) {
        this.addSearchHistory(query);
      }
    },
    searchHistory(newVal, oldVal) {
      this.setSearchHistory();
      this.$nextTick(() => {
        if (this.$refs.ISC) this.$refs.ISC.refresh();
      });
    }
  },
  components: {
    ISC,
    Cardlist,
    Icon
  }
};
</script>

<style scoped lang="scss">
.ix-page-search {
  overflow: hidden;
  height: 100%;
  background: #f4f5f5;
  .ix-tabs-bar {
    display: flex;
    width: 100%;
    max-width: 800px;
    color: white;
    padding-bottom: 12px;
    position: relative;
    flex-shrink: unset;
  }
  .ix-tabs-bar-nav-item {
    width: 100%;
    text-align: center;
    z-index: 2;
    cursor: pointer;
  }
  .ix-tabs-line-container {
    z-index: 1;
    width: calc(100% / 3);
    position: absolute;
    bottom: 4px;
    transition: transform 0.2s;
    // transform: translateX(100%);
  }
  .ix-tabs-line {
    display: inline-block;
    height: 2px;
    background: white;
    width: 24px;
    border-radius: 10px;
  }
  .ix-tabs-content {
    height: 100%;
    display: flex;
  }
  .ix-tabs {
    height: 100%;
  }
  .ix-tabs-content-item {
    display: flex;
    height: calc(100% - 30px);
    flex-shrink: 0;
    width: 100%;
    position: relative;
  }
  .ix-article-viewport-container {
    padding-top: 10px;
    display: flex;
    justify-content: center;
  }
  .ix-search-history {
    width: 100%;
    display: flex;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
    justify-content: center;
    position: relative;
  }
  .ix-search-history-content {
    width: 100%;
    max-width: 800px;
  }
  .ix-search-clear {
    position: relative;
    margin-left: 20px;
    font-size: 18px;
    height: 40px;
    margin-top: 20px;
    line-height: 40px;
    .ix-history-remove {
      position: absolute;
      right: 10px;
      top: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
  .ix-search-history-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .ix-search-history-item {
    margin-left: 20px;
    position: relative;
    height: 44px;
    color: black;
    border-bottom: 1px solid rgba(180, 180, 180, 0.2);
    line-height: 44px;
    .ix-history-content {
      width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
    }
    .ix-history-remove {
      position: absolute;
      top: 0px;
      right: 0px;
      cursor: pointer;
      width: 40px;
      text-align: center;
      display: inline-block;
    }
  }
  .ix-tabs-bar-container {
    display: flex;
    background: #1c2438;
    justify-content: center;
  }
}
.ix-history-icon {
  $icon-size: 16px;
  display: inline-block;
  width: $icon-size;
  height: $icon-size;
  background: {
    image: url(./history.svg);
    size: cover;
    position: center;
    repeat: no-repeat;
  }
  margin-right: 8px;
}
.ix-history-text {
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1 1;
}
</style>