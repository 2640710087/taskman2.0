<template>
  <div id="task-body">
    <router-view></router-view>
    <div style="width: 500px;margin: 0 auto;">
      <Tabs value="name1">
        <TabPane label="标签一" name="name1">
            <Card>
                <div slot="title">
                  搬砖200块 - main
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                  <div >start time: 2018-02-02 18:00</div>
                  <div >end time: 2018-02-02 18:00</div>
                </div>
                <p>this is testing</p>
                <div style="text-align: right;">2018-02-02 18:00</div>
            </Card>
            <card>
              <div slot="title">
                  搬砖200块 - main
                </div>
                <p>this is testing</p>
                <div style="text-align: right;">2018-02-02 18:00</div>
            </card>
        </TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import card from "@/components/card/card";
import { Tabs, TabPane, Card } from "iview";
import { add, del, query } from "../../plugins/task/task";
import { getStorage } from "../../config/other";
export default {
  data() {
    return {
      taskList: [],
      addTaskList: {
        username: getStorage("username"),
        token: getStorage("token"),
        start: "2018-02-03",
        finish: "2018-02-04",
        title: "hello world",
        details: "this is test task details",
        situation: "11"
      }
    };
  },
  computed: {},
  methods: {
    add() {
      let addfiled = this.addTaskList;
      add(addfiled.username, addfiled.token, addfiled.start, addfiled.finish, addfiled.title, addfiled.details, addfiled.situation)
    },
  },
  mounted () {
    this.add();
  },
  components: {
    Tabs,
    TabPane,
    Card,
    card
  }
};
</script>

<style scoped>

</style>