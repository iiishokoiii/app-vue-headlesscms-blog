import { ref } from 'vue';
import { microCmsClient } from '/src/services/microCmsClient';
export const useCategory = () => {
  const categories = ref([]);
  const category = ref('');
  const fetchCategories = async () => {
    const response = await microCmsClient('categories');
    categories.value = response.contents;
  };
  const fetchCategory = async (id) => {
    const response = await microCmsClient(`categories/${id}`);
    categories.value = response;
  };
  return {
    categories,
    category,
    fetchCategories,
    fetchCategory,
  };
};
