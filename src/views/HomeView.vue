<template>
  <ArticleList :articles="articles" />
</template>
<script setup>
import { onMounted } from 'vue';
import { useArticle } from '/src/hooks/use-article';
import ArticleList from '/src/components/ArticleList';
const { articles, fetchArticles } = useArticle();
onMounted(async () => {
  await fetchArticles('');
});
</script>
