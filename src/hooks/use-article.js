import { ref } from 'vue';
import { microCmsClient } from '/src/services/microCmsClient';
export const useArticle = () => {
  const articles = ref([]);
  const fetchArticles = async (params = "") => {
    const path = `blogs/${params}`
    console.log(path)
    const response = await microCmsClient(path);
    articles.value = response.contents;
  };
  return {
    articles,
    fetchArticles,
  };
};
