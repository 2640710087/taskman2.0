<template>
    <div class="ix-upload">
        <div class="ix-upload-container">
            <ISC>
                <div class="ix-upload-viewport-container">
                    <div class="ix-upload-viewport">
                        <div class="">
                            Upload
                        </div>
                        <Upload
                            multiple
                            type="drag"
                            name="upload"
                            action="//107.151.172.35/uploadimg.php">
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>Click or drag files here to upload</p>
                            </div>
                        </Upload>
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
import { Upload, Icon } from 'iview';
export default {
  data() {
    return {
      article: {
          title: '',
          summary: '',
          files: null,
      }
    };
  },
  methods: {},
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
