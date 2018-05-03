<template>
    <div class="ix-card-list">
        <ul>
            <li v-for="( article, index ) in articlelist" :key="index" >
                <Card 
                :author="article.username" 
                :title="article.title"
                :summary="article.summary"
                :time="article.time"
                :location="article.location"
                :lables="article.tag"
                ></Card>
            </li>
        </ul>
    </div>
</template>

<script>
import Card from "./card.vue";
export default {
  data() {
    return {};
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