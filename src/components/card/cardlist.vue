<template>
    <div class="ix-card-list">
        <ul>
            <li v-for="( article, index ) in articlelist" :key="index" >
                <Card 
                :author="article.username" 
                :title="article.title"
                :summary="article.summary"
                :time="article.time"
                :location="`${host}/html/${article.location}`"
                :lables="article.tag"
                ></Card>
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
  }
};
</script>

<style scoped>
</style>