<template>
  <div id="account" ref="container">
    <div class="form-body vague" :class="{blur: loading}">

      <Row type="flex" justify="center" class="title" v-if="title">
        <Col span="24">
        <h3 v-html="title"></h3>
        </Col>
      </Row>

      <Row type="flex" justify="center">
        <Col :xs="22" :sm="10" :md="8" :lg="6">
        <Form @submit.native.prevent>
          <slot></slot>
        </Form>
        </Col>
      </Row>
      <Row type="flex" justify="center" v-if="langSwitch">
        <Col :xs="22" :sm="10" :md="8" :lg="6" class="lang">
        <span>
          
          <span class="chinese" @click="switchLang('zh-CN')" >中文</span>
          <span class="english" @click="switchLang('en')" >English</span>
        </span>
        </Col>
      </Row>
    </div>
    <Loading :loadingtext="loadtext" v-if="loading"></Loading>
  </div>
</template>

<script>
import { Form, Col, Row } from "iview";
import Loading from "../loading/loading";
export default {
  components: {
    Col,
    Row,
    Form,
    Loading
  },
  props: {
    langSwitch: {
      type: Boolean,
      default() {
        return false;
      }
    },
    title: {
      type: String,
      default() {
        return "account";
      }
    },
    loading: {
      type: Boolean,
      default() {
        return false;
      }
    },
    loadtext: {
      type: String,
      default() {
        return "loading ...";
      }
    }
  },
  methods: {
    switchLang(lang) {
      if (window.localStorage.lang === lang) return;
      window.localStorage.lang = lang;
      this.$emit("switchLang", lang);
    }
  }
};
</script>

<style lang="scss" scoped>
$lang-color: rgba(255, 255, 255, 0.8);
#account {
  min-height: 370px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  //
  background: url(../../images/bg.png) no-repeat center center fixed;
  &::before {
    clear: both;
    content: "";
    display: block;
    overflow: auto;
  }
  .title {
    margin: 10px 0 20px 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white;
  }
  .vague {
    transition: 0.2s filter;
  }
  .blur {
    filter: blur(5px);
  }
  .lang {
    text-align: center;
    color: $lang-color;
    border-radius: 4px;
    user-select: none;
    .chinese {
      color: $lang-color;
      transition: 0.5s color;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
    .english {
      color: $lang-color;
      transition: 0.5s color;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
}
</style>
