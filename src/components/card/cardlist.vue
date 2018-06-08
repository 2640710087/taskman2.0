<template>
    <div class="ix-card-list">
        <ul>
            <li v-for="( article, index ) in articlelist" :key="index" >
                <Card >
                  <div class="ix-card-container">
                      <!-- 作者 标题 概述 时间 标签 -->
                      <h4 class="ix-author-info">
                          <router-link :to="`/user/${ article.username }`">
                            <div class="ix-author-name">
                                {{ article.username }}
                            </div>
                          </router-link>
                          <span class="ix-symbol">·</span>
                          <div class="ix-article-time">
                              {{ article.time }}
                          </div>
                      </h4>
                      <div class="ix-article">
                              <h2 class="ix-article-title">
                                  <div class="ix-article-title-content">
                                      <a :href="article.location" target="_blank">
                                          {{ article.title }}
                                      </a>
                                  </div>
                              </h2>
                              <div class="ix-article-summary">
                                <a :href="`${host}/html/${article.location}`" target="_blank" class="ix-article-link">
                                  {{ article.summary | format(39) }}
                                </a>
                              </div>

                          <div class="ix-article-info">
                              <div class="ix-article-lable">
                                  <ul class="ix-article-lable-list" v-if="labelStringToArray(article.tag)">
                                      <li class="ix-article-lable-item" v-for="(lable, index) in labelStringToArray(article.tag)" :key="index">
                                        <a :href="`/#/lable/${lable}`" >{{ lable }}</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                </Card>
            </li>
        </ul>
    </div>
</template>

<script>
import Card from "./card.vue";
import { baseURL } from "@/config/env";
export default {
  data() {
    return {
      host: baseURL
    };
  },
  methods: {
    labelStringToArray(labstr) {
      let lableitem = labstr.split(",");
      return lableitem;
    }
  },
  props: {
    articlelist: {
      type: Array,
      default() {
        return;
      }
    }
  },
  components: {
    Card
  },
  filters: {
    format(text, length) {
      let len = text.length;
      if (len > length) {
        text = text.substr(0, length);
        text = `${text}…`
      }
      return text
    }
  }
};
</script>

<style scoped lang="scss">
.ix-card-container {
  padding: 16px 20px;
  .ix-author-info {
    cursor: default;
    display: flex;
    align-items: center;
    color: rgba(26, 26, 26, 0.3);
    font-size: 12px;
    .ix-author-name {
      cursor: pointer;
      color: #444;
      font: {
        size: 14px;
        weight: 600;
      }
    }
    .ix-symbol {
      $symbol-distance: 6px;
      font-size: 15px;
      margin: {
        left: $symbol-distance;
        right: $symbol-distance;
      }
    }
    .ix-article-time {
      transition: 0.2s all;
      &:hover {
        color: rgba(26, 26, 26, 0.8);
      }
    }
  }
  .ix-article {
    .ix-article-title {
      color: #1a1a1a;
      margin: {
        bottom: 2px;
      }
      .ix-article-title-content {
        a {
          color: inherit;
          font: {
            size: 20px;
            weight: 600;
          }
          &:hover {
            color: #175199;
          }
        }
        line-height: 1.6;
      }
    }
    .ix-article-summary {
      .ix-article-link {
        &:hover {
          color: #646464;
        }
        word-wrap: break-word;
        color: #181818;
        margin: {
          bottom: 4px;
        }
        font: {
          size: 15px;
          weight: 500;
        }
        line-height: 1.5;
      }
    }

    .ix-article-info {
      display: flex;
      flex-direction: column;
      padding: {
        left: 20px;
        right: 20px;
        top: 15px;
        bottom: 8px;
      }
      margin: -10px -20px;
      .ix-article-lable {
        .ix-article-lable-list {
          display: flex;
          justify-content: flex-start;
          .ix-article-lable-item {
            text-align: center;
            cursor: pointer;
            padding: 2px 10px;
            border-radius: 20px;
            margin: {
              top: 2px;
              right: 4px;
              bottom: 2px;
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
      }
    }
  }
}
</style>