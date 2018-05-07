<template>
    <div class="ix-upload">
        <div class="ix-upload-container">
            <ISC>
                <div class="ix-upload-viewport">
                    <div>
                        {{ art }}
                    </div>
                    <button @click="upload">send</button>
                </div>
            </ISC>
        </div>
    </div>
</template>

<script>
import ISC from "@@/iscroll";
import addart from "./ajax.js";
export default {
  data() {
    return {
      art: null
    };
  },
  methods: {
    upload() {
      addart(
        "virgin-forest",
        "3f7863c4080086a9365d5bef3b4de67b",
        "死亡退出",
        "来自ctf.bugku.com的题目",
        "52193123",
        "CTF,PHP,Web"
      ).then(res => {
        console.log(res);
      });
    }
  },
  components: {
    ISC
  }
};
</script>

<style scoped lang="scss">
.ix-upload {
  margin-top: 56px;
  height: calc(100% - 56px);
  width: 100%;
  display: flex;
  // 水平居中
  justify-content: center;
  .ix-upload-container {
    width: 100%;
    position: relative;
  }
}
.ix-upload-viewport {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
