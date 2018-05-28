<template>
    <div class="ix-add">
        <div class="ix-add-container">
                <div class="ix-add-viewport-container">
                    <div class="ix-add-viewport">
                        <div class="ix-add-form" ref="addForm">
                            <Form >
                                <FormItem >
                                    <div class="ix-add-user-title">
                                        <h1>
                                            添加文章
                                        </h1>
                                    </div>
                                </FormItem>

                                <FormItem label="标题">
                                    <Input type="text" v-model="article.username" placeholder="不超过48个字符" :maxlength="48"></Input>
                                </FormItem>

                                <FormItem label="标签">
                                    <Select
                                        filterable
                                        placeholder="可多选"
                                        remote
                                        :remote-method="getTag"
                                        v-model="tagSelect.tag"
                                        multiple
                                        :loading="tagSelect.loading"
                                        not-found-text="没有匹配的标签"
                                        >
                                        <Option data-unprevent v-for="(tag, index) in tagSelect.tags" :value="tag.value" :key="index">{{tag.label}}</Option>
                                    </Select>
                                </FormItem>

                                <FormItem label="概述">
                                    <Input type="textarea" v-model="article.summary" placeholder="不超过160个字符" 
                                        :rows="4"
                                        :maxlength="160" 
                                        size="large"
                                        >
                                    </Input>
                                </FormItem>



                                <FormItem>
                                    <Upload
                                        accept="text/html"
                                        :format="['html']"
                                        :on-format-error="handleFormatError"
                                        :on-success="handleUploadSuccess"
                                        type="drag"
                                        :data="sendParam"
                                        name="upload"
                                        action="//localhost/test.php">
                                        <div style="padding: 20px 0">
                                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                            <p>拖动或点击此处来上传html文件！</p>
                                        </div>
                                    </Upload>
                                </FormItem>

                                <FormItem>
                                    <div class="ix-add-btn-container">
                                        <div class="ix-add-btn-commit">
                                            <Button type="primary" long>Submit</Button>
                                        </div>
                                    </div>
                                    
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {
  Input,
  Form,
  FormItem,
  Button,
  Upload,
  Icon,
  Select,
  Option
} from "iview";
import ISC from "@@/iscroll";
import UserIcon from "@@/user-icon";
import { getTagList } from "@/plugins/senddata";
export default {
  data() {
    return {
      tagSelect: {
        loading: false,
        tag: [],
        tags: []
      },
      tagList: [],
      article: {
        username: this.$store.state.USER_INFO.username,
        token: this.$store.state.USER_INFO.token,
        title: "",
        summary: "",
        tag: "",
        location: ""
      },
      images: []
    };
  },
  computed: {
    sendParam() {
      return {
        token: "5b299e2a21fd76d5b470f51daf31bf69",
        username: "virgin-forest"
      };
    }
  },
  methods: {
    handleUploadSuccess(response, file, fileList) {
      this.$store.state.USER_INFO.token = response.token;
      this.article.location = response.html;
      this.images = response.images.split(",");
      this.$Message.success("上传成功!");
      console.log(response);
    },
    handleFormatError(file, fileList) {
      this.$Message.warning("文件类型错误，请上传html文件！");
      console.log(file, fileList);
    },
    async getTagList() {
      let { tag } = await getTagList();
      tag = tag.split(",").map(item => {
        return {
          value: item,
          label: item
        };
      });
      this.tagList = tag;
    },

    async getTag(query) {
      console.log(query);
      if (query) {
        this.tagSelect.loading = true;
        setTimeout(() => {
          this.tagSelect.loading = false;
          let tagList = this.tagList;
          this.tagSelect.tags = tagList.filter(item =>
            item.label.toLowerCase().includes(query.toLowerCase())
          );
        }, 300);
      } else {
        this.tagSelect.tags = [];
      }
    },
    addListener() {
      let form = this.$refs.addForm;
      console.log(form.clientHeight);
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          console.log(mutation.type);
        });
      });

      // 配置观察选项:
      var config = {
        attributes: true,
        childList: true,
        // characterData: true,
        subtree: true
      };

      // 传入目标节点和观察选项
      observer.observe(form, config);

      // 随后,你还可以停止观察
      //   observer.disconnect();
    }
  },
  mounted() {
    this.$store.state.ISCROLL.iscroll = null;
    this.getTagList();
    // this.addListener();
  },
  components: {
    Input,
    ISC,
    Form,
    FormItem,
    Button,
    Upload,
    Icon,
    Select,
    Option,
    UserIcon
  }
};
</script>

<style scoped lang="scss">
.ix-add {
  width: 100%;
  //   height: 100%;
  display: flex;
  -webkit-overflow-scrolling: touch;
  .ix-add-container {
    width: 100%;
    position: relative;
  }
  .ix-add-viewport-container {
    width: 100%;
    // height: 100%;
    display: flex;
    justify-content: center;
  }
  .ix-add-viewport {
    width: 100%;
    max-width: 800px;
  }
  .ix-add-form {
    margin: {
      top: 60px;
      bottom: 40px;
      left: 10px;
      right: 10px;
    }
    border-radius: 8px;
    background: white;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.1);
    padding: {
      top: 40px;
      bottom: 16px;
      left: 24px;
      right: 24px;
    }
  }
  .ix-add-btn-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .ix-add-btn-commit {
    width: 100px;
    @media screen and (max-width: 480px) {
      width: 100% !important;
    }
  }
  .ix-add-user-title {
    display: flex;
  }
  .ix-user-icon {
    margin-right: 8px;
  }
}
</style>