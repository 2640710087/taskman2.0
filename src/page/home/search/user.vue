<template>
  <div class="ix-search-user" >
    <div class="ix-" v-if="userList.length > 0">
      <ul>
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
  </div>
</template>

<script>
import { Card } from "@@/card";
import userIcon from "@@/user-icon";
export default {
  data() {
    return {
      loading: "加载中…"
    };
  },
  computed: {
    userList() {
      return this.$store.getters.getUser;
    }
  },
  mounted() {
    if (this.userList.length === 0) {
      console.log(this.userList)
      setTimeout(() => {
        this.loading = "无结果";
      }, 800);
    }
  },
  components: {
    Card,
    userIcon
  }
};
</script>

<style scoped lang="scss">
.ix-search-user {
  width: 100%;
  height: 100%;
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
</style>