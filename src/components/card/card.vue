<template>
    <div class="ix-card">
        <div class="ix-card-container">
            <!-- 作者 标题 概述 时间 标签 -->
            <h4 class="ix-author-info">
                <div class="ix-author-name">
                    virgin-forest
                </div>
            </h4>

            <div class="ix-article">
                <a href="/#/" target="_blank" class="ix-article-link">
                    <h2 class="ix-article-title">
                        <a href="/#/" target="_blank">
                            <div class="ix-article-title-content">
                                test title
                            </div>
                        </a>
                    </h2>

                    <div class="ix-article-summary">
                        test summary
                    </div>
                </a>
                <div class="ix-article-info">
                    <div class="ix-article-lable">
                        <ul class="ix-article-list">
                            <li class="ix-article-lable-item">lable one</li>
                        </ul>
                    </div>

                    <div class="ix-article-time">
                        2018-04-26 11:59:16
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  props: {}
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
      .ix-author-name {
        color: #444;
        font: {
          size: 15px;
          weight: 600;
        }
        margin: {
          bottom: 14px;
        }
      }
    }
    .ix-article {
      .ix-article-link {
        .ix-article-title {
          color: #1a1a1a;
          a {
            color: inherit;
            &:hover {
              color: #393f9b;
            }
            .ix-article-title-content {
              font: {
                size: 18px;
                weight: 600;
              }
              line-height: 1.6;
            }
          }
        }
        .ix-article-summary {
          color: #1a1a1a;
          font: {
            size: 15px;
            weight: 500;
          }
          line-height: 1.67;
        }
      }

      .ix-article-info {
        .ix-article-lable {
          .ix-article-lable-list {
            .ix-article-lable-item {
            }
          }
        }
        .ix-article-time {
        }
      }
    }
  }
}
</style>