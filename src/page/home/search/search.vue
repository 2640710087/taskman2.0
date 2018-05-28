<template>
    <div>
         <Tabs value="name2">
        <TabPane label="文章" name="name1">
        <div v-if="articles">
            <div v-for="(article, index) in articles" :key="index">
                {{ article }}
            </div>
        </div>
        </TabPane>
        <TabPane label="标签" name="name2">
          <div v-if="tags">
            <div v-for="(tag, index) in tags" :key="index">
                {{ tag }}
            </div>
        </div>
        </TabPane>
        <TabPane label="用户" name="name3">
                  <div v-if="users">
            <div v-for="(user, index) in users" :key="index">
                {{ user.username }}
            </div>
        </div>
        </TabPane>
    </Tabs>
    </div>
</template>

<script>
import { search, checkToken } from "@/plugins/senddata";
import { Tabs, TabPane } from "iview";
export default {
  data() {
    return {
      tags: [],
      articles: [],
      users: []
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
      this.getSearch(query);
    }
  },
  components: {
    Tabs,
    TabPane
  }
};
</script>

<style scoped>
</style>