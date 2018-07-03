<template>
  <div class="ix-search-user" >
    <ISC ref="ISC">
      <div class="ix-search-container" v-if="userList.length">
        <ul class="ix-search-user-list">
          <li v-for="(user, index) in userList" :key="index">
            <Card>
              <div class="ix-search-user-item">
                <userIcon :username="user.username"></userIcon>
                <span class="ix-search-user-name">{{ user.username }}</span>
              </div>
            </Card>
          </li>
        </ul>
      </div>
      <div class="ix-nofound" v-else>{{ loading }}</div>
    </ISC>
  </div>
</template>

<script>
import { Card } from "@@/card";
import userIcon from "@@/user-icon";
import ISC from "@@/iscroll";
export default {
  data() {
    return {
      loading: "加载中…",
      // userList: []
    };
  },
  computed: {
    userList() {
      return  this.$store.getters.getUser
    }
  },
  mounted() {
    if (!this.userList.length) {
      setTimeout(() => {
        this.loading = "无结果";
      }, 800);
    }
  },
  watch: {
    userList(v, oldV) {
      this.$nextTick(() => {
        if(this.$refs.ISC)
        this.$refs.ISC.refresh()
      });
    }
  },
  components: {
    Card,
    userIcon,
    ISC
  }
};
</script>

<style scoped lang="scss">
.ix-search-user {
  width: 100%;
  height: 100%;
  position: relative;
}
.ix-search-user-item {
  padding: 14px 10px;
  height: 60px;
  display: flex;
  align-items: center;
}
.ix-search-user-name {
  margin-left: 20px;
  font-weight: 700;
  font-size: 16px;
}

.ix-search-user-list {
  width: 100%;
  max-width: 800px;

}
.ix-search-container {
  display: flex;
  padding-top: 10px;
  justify-content: center;
}
</style>