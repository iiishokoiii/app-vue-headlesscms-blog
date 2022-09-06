<template>
  <div>
    <h2>カテゴリー:{{ category.name }}</h2>
    <ArticleList :articles="articles" />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useArticle } from '/src/hooks/use-article';
import { useCategory } from '@/hooks/use-category.js';
import ArticleList from '/src/components/ArticleList';
import { useRoute } from 'vue-router';
const route = useRoute();
const { articles, fetchArticles } = useArticle();
const { category, fetchCategory } = useCategory();
const fetchContents = async () => {
  console.log('----fetchContents---');
  console.log(route.params.id);
  await fetchCategory(route.params.id);
  await fetchArticles(`?filters=category[equals]${route.params.id}`);
};
watch(() => route.params.id, fetchContents);
onMounted(fetchContents);
</script>
