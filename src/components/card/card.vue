<template>
    <div class="ix-card">
        <div class="ix-card-container">
            <!-- 作者 标题 概述 时间 标签 -->
            <h4 class="ix-author-info">
                <div class="ix-author-name">
                    {{ author }}
                </div>
                <span class="ix-symbol">·</span>
                <div class="ix-article-time">
                    {{ time }}
                </div>
            </h4>
            <div class="ix-article">
                <a :href="location" target="_blank" class="ix-article-link">
                    <h2 class="ix-article-title">
                        <div class="ix-article-title-content">
                            <a :href="location" target="_blank">
                                {{ title }}
                            </a>
                        </div>
                    </h2>
                    <div class="ix-article-summary">
                        {{ summary }}
                    </div>
                </a>
                <div class="ix-article-info">
                    <div class="ix-article-lable">
                        <ul class="ix-article-lable-list" v-if="lablelist">
                            <li class="ix-article-lable-item" v-for="(lable, index) in lablelist" :key="index">
                              <a :href="`/#/lable/${lable}`" >{{ lable }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    lablelist() {
      let [lableitem, lables] = [[], this.lables];
      if (typeof lables === "string") {
        lableitem = lables.split(",");
      } else if (lables instanceof Array) {
        lableitem = lables;
      }
      return lableitem;
    }
  },
  props: {
    author: {
      type: String,
      default() {
        return;
      }
    },
    title: {
      type: String,
      default() {
        return;
      }
    },
    summary: {
      type: String,
      default() {
        return;
      }
    },
    time: {
      type: String,
      default() {
        return;
      }
    },
    location: {
      type: String,
      default() {
        return;
      }
    },
    lables: {}
  }
};
</script>

<style scoped lang="scss">
$card-mb: 10px !default;
.ix-card {
  width: 100%;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background: white;
  margin: {
    bottom: $card-mb;
  }
  .ix-card-container {
    padding: 14px 20px;
    .ix-author-info {
      cursor: default;
      display: flex;
      align-items: center;
      color: rgba(26, 26, 26, 0.3);
      font-size: 12px;
      .ix-author-name {
        cursor: pointer;
        color: #444;
        margin: {
          // right: 14px;
        }
        font: {
          size: 13px;
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
      .ix-article-link {
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
                color: #393f9b;
              }
            }
            line-height: 1.6;
          }
        }
        .ix-article-summary {
          &:hover {
            color: #666;
          }
          color: #1a1a1a;
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
        .ix-article-lable {
          .ix-article-lable-list {
            display: flex;
            justify-content: flex-start;
            .ix-article-lable-item {
              text-align: center;
              cursor: pointer;
              padding: 2px 10px;
              border-radius: 4px;
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
}
</style>