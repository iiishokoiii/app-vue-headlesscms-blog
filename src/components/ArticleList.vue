<template>
  <ul>
    <li v-for="article in props.articles" :key="article.id">
      <img :src="article.eyecatch.url" alt="" v-if="article.eyecatch" />
      <router-link :to="`/article/${article.id}`">
        {{ article.title }}
      </router-link>
      <router-link :to="`/category/${article.category.id}`" class="category" v-if="article.category">
        {{ article.category.name }}
      </router-link>
    </li>
  </ul>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(['articles']);
</script>
<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul img {
  max-width: 100%;
}
.category {
  display: block;
  text-align: right;
}
</style>
