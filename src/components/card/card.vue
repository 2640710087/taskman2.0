<template>
    <div class="ix-card">
      <slot></slot>
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
  
}
</style>
