<template>
    <div class="ix-upload">
        <div class="ix-upload-drag"
        @click="$handleClick">
            <input
            ref="input"
            type="file"
            data-unprevent
            class="ix-upload-input"
            @change="$handleChange"
            />
            <slot></slot>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
        fileList: []
    };
  },
  computed: {},
  components: {},
  methods: {
      $handleClick() {
          this.$refs.input.click();
      },
      $handleChange() {

      },

  }
};
</script>

<style scoped lang="scss">
.ix-upload {
    .ix-upload-input {
        display: none;
    }
    .ix-upload-drag {
        border: 1px dashed #dddee1;
    }
}
</style>
