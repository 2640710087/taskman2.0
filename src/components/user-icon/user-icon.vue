<template>
    <canvas class="ix-user-icon" ref="userIcon" :width="size" :height="size"></canvas>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: " "
    },
    size: {
      type: Number,
      default: 24
    }
  },
  methods: {
    drawUserIcon() {
      let cvs = this.$refs.userIcon,
        ctx = cvs.getContext("2d"),
        fontSize = 12,
        width = cvs.width,
        height = cvs.height,
        size = this.size / 2;
      function drawCircel(color = "#00897b") {
        ctx.fillStyle = color;
        ctx.arc(size, size, size, 0, Math.PI * 2, true);
        ctx.fill();
      }

      function drawText(text, color = "white", fontSize = 16) {
        ctx.font = `${fontSize}px 微软雅黑`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = color;
        ctx.fillText(text, width / 2, height / 2);
      }
      drawCircel();
      drawText(this.username[0].toUpperCase(), "white", 12);
    }
  },
  mounted() {
    this.drawUserIcon();
  }
};
</script>

<style scoped>
</style>