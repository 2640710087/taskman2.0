<template>
  <div id="ix-search-container">
    <div class="ix-search d-flex-center" :class="{'ix-search-focus': focus}">
      <label for="input" class="ix-search-icon-container d-flex-center">
        <Icon type="ios-search-strong" size="20" class="ix-search-icon"></Icon>
      </label>
      <div   class="ix-search-box">
        <input id="input" type="text" class="ix-search-input" placeholder="Search Forest" 
        @click="handleClick()"
        :maxlength="38"
        v-model.trim="query"
        @focus="$handleFocus"
        @keyup.enter="$handleEnter"
        @keydown="$handleKeydown"
        @keypress="$handleKeypress"
        @input="$handleInput"
        @keyup="$handleKeyup"
        @change="$handleChange"
        @blur="$handleBlur"
        ref="search"
        >
        <span @click="handleClear">
          <Icon type="ios-close" size="16" class="ix-close-icon" v-show="query" ></Icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "iview";
import { Sleep } from "@/plugins/account";
export default {
  props: {},
  data() {
    return {
      query: null,
      focus: false
    };
  },
  computed: {
    search() {
      return this.isSearch(this.$route.fullPath);
    }
  },
  methods: {
    handleClick() {
      if (!this.search) {
        this.$router.push("/search");
      }
      this.setFocus();
    },
    handleClear() {
      this.query = "";
      this.setFocus();
      this.clearSearch();
      this.$router.replace(`/search`);
    },
    async $handleEnter(event) {
      this.$emit("enter", event);
      let { query } = this;
      console.log(query)
      if (query) {
        this.$refs.search.blur();

        if (this.search) {
          this.$store.commit('query',this.query)
          let {query, type} = this.$store.getters.getSearch;
          query = encodeURIComponent(query)
          this.$router.replace(`/search/${type}/${query}`);
        } else {
          this.$router.push(`/search`);
        }
      }
    },
    $handleInput(event) {
      this.$emit("$input", this.input);
      this.$emit("$on-change", event);
    },
    $handleChange(event) {
      this.$emit("$input-change", event);
    },
    $handleFocus(event) {
      this.focus = true;
      this.handleClick();
      this.$emit("$focus", event);
    },
    $handleBlur(event) {
      this.focus = false;
      this.$emit("$blur", event);
    },
    $handleKeypress(event) {
      this.$emit("$keypress", event);
    },
    $handleKeyup(event) {
      this.$emit("$keyup", event);
    },
    $handleKeydown(event) {
      this.$emit("$keydown", event);
    },
    setFocus() {
      this.display = true;
      this.$nextTick(e => {
        this.$refs.search.focus();
      });
    },
    setBlur() {
      // this.display = none;
      this.$refs.search.blur();
    },
    isSearch(path) {
      let pathRegex = /^\/(search)(?:\?.*|\/.*)?$/i;
      return pathRegex.test(path);
    },
    clearSearch() {
      this.$store.commit('clearSearch')
    }
  },
  components: {
    Icon
  },
  mounted() {
    let { query } = this.$route.params;
    if (this.isSearch(this.$route.fullPath)) {
      if (query) {
        this.query = query;
        this.$store.commit('query', query)
        // this.setBlur();
      } else {
        // this.setFocus();
      }
    }
  },
  watch: {
    $route(Val, oldVal) {
      let { query } = Val.params;
      this.query = query;
      if (!this.isSearch(Val.fullPath)) {
        this.$store.commit("setType", 'article')
        this.$store.commit('query', '');
        console.log(this.$store.state.SEARCH)
      }
      console.log(Val)
    }
  }
};
</script>

<style scoped lang="scss">
#ix-search-container {
  height: 26px;
  line-height: 26px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  .ix-search-focus {
    background: #fff !important;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.2);
  }
  .ix-search {
    transition: 0.2s all;
    height: 100%;
    width: 100%;
    background: #40484e;

    position: relative;
    .ix-search-icon-container {
      width: 32px;
      margin-left: 4px;
      justify-content: center;
      .ix-search-icon {
        color: #666a6d;
      }
    }

    .ix-search-input {
      height: 100%;
      width: 100%;
      background: none;
      outline: none;
      color: #fff;
      transition: color 0.2s;
      font-size: 12px;
      &:focus {
        color: #000;
      }
      &::-moz-placeholder {
        color: #666a6d;
      }
      &::-webkit-input-placeholder {
        color: #666a6d;
      }
      &:-ms-input-placeholder {
        color: #666a6d;
      }
    }
  }
}
.ix-placeholder {
  color: #666a6d;
  font-size: 12px;
  line-height: 26px;
}
.ix-search-box {
  width: 100%;
  display: flex;
  align-content: center;
  color: rgba(0, 0, 0, 0.4);
  height: 100%;
  line-height: 30px;
}
.ix-close-icon {
  position: absolute;
  right: 10px;
  height: 100%;
  line-height: 26px;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
