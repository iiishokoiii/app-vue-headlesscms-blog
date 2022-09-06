<template>
  <nav>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <router-link :to="`/category/${category.id}`">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { onMounted } from 'vue';
import { useCategory } from '/src/hooks/use-category';
const { categories, fetchCategories } = useCategory();
onMounted(async () => {
  await fetchCategories();
});
</script>
