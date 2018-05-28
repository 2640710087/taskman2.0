<template>
    <div class="ix-upload">
        <div class="ix-upload-container">
            <ISC>
                <div class="ix-upload-viewport-container">
                    <div class="ix-upload-viewport">
                        <div class="">
                            Upload
                        </div>
                        <input id="file" data-unprevent type="file" ref="file" @click="f">
                        <div>
                          {{ src }}
                        </div>
                        <img :src="src">
                    </div>
                </div>
            </ISC>
        </div>
    </div>
</template>

<script>
import ISC from "@@/iscroll";
import addart from "./ajax.js";
// import Upload from "@@/upload";
import { Upload, Icon } from "iview";
export default {
  data() {
    return {
      article: {
        title: "",
        summary: "",
        files: null
      },
      data: {
        token: "bfbd2490cac0d378a461869b995499a9",
        htmlname: "./html/c59580f5bd9f275c65bc96959df77a39.html",
        username: "virgin-forest"
      },
      src: ""
    };
  },
  methods: {
    f() {
      this.$refs.file.addEventListener(
        "change",
        e => {
          console.log(e);

          let file = e.target.files[0];
          this.src = file.name;
          this.src = this.r(file).result;
        },
        false
      );
    },
    r(f) {
      console.log(f);
      let r = new FileReader();
      console.log(r.readAsDataURL(f));
      r.onloadend = e => {
        console.log(e);
        this.src = e.target.result;
      };

      return r;
    }
  },
  mounted() {
    let username = this.$store.state.USER_INFO.username;
    username = true;
    if (!username) {
      this.$router.replace("/notfound");
    }
    console.log();
  },
  components: {
    ISC,
    Icon,
    Upload
  }
};
</script>

<style scoped lang="scss">
.ix-upload {
  margin-top: 56px;
  height: calc(100% - 56px);
  width: 100%;
  display: flex;
  justify-content: center;

  .ix-upload-container {
    width: 100%;
    position: relative;
  }

  // 视口
  .ix-upload-viewport-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .ix-upload-viewport {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  //
  .ix-upload-file {
    margin-top: 120px;
    border: 1px dashed rgba(0, 0, 0, 0.2);
    height: 200px;
    width: 400px;
    border-radius: 4px;
  }
}
</style>
