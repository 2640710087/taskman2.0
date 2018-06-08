<template>
  <div class="ix-search-label">
    <ISC>
      <div class="ix-search-label-container">
        <div v-if="label.length > 0" class="ix-label-container">
          <ul class="ix-article-lable-list">
              <li class="ix-article-lable-item" v-for="(tag, index) in label" :key="index">
                <a :href="`/#/lable/${tag}`" >{{ tag }}</a>
              </li>
          </ul>
        </div>
        <div v-else class="ix-nofound">{{ loading }}</div>
      </div>
    </ISC>
  </div>
</template>

<script>
import ISC from "@@/iscroll";
export default {
  data() {
    return {
      loading: "加载中…"
    }
  },
  computed: {
    label() {
      let tagString = this.$store.getters.getTag;
      if (Array.isArray(tagString)) return [];
      else {
        return tagString.split(",");
      }
    }
  },
  mounted() {
    if (this.label.length === 0) {
      console.log(this.userList)
      setTimeout(() => {
        this.loading = "无结果";
      }, 800);
    }
  },
  components: {
    ISC
  }
};
</script>

<style scoped lang="scss">
.ix-search-label {
  height: 100%;
  width: 100%;
  position: relative;
}
.ix-article-lable-list {
  display: flex;
  flex-flow: row wrap;
  // justify-content: flex-start;
  .ix-article-lable-item {
    display: inline;
    white-space:inherit;
    text-align: center;
    cursor: pointer;
    padding: 5px 15px;
    border-radius: 20px;
    margin: {
      top: 6px;
      right: 12px;
      bottom: 6px;
      left: 0px;
    }
    transition: all 0.8s;
    background: {
      color: #1c2438;
    }
    &:hover {
      background: #080516;
    }
    a {
      color: #fff;
    }
  }
}
.ix-label-container {
  width: 100%;
  max-width: 800px;
  padding: 10px;
}
.ix-search-label-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>