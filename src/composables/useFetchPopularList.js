import { onMounted, ref } from 'vue';
import { getPopular } from '@/api/list';
export default function useFetchPopularList(type) {
  const list = ref([]);

  onMounted(async () => {
    const {
      data: { results },
    } = await getPopular(type);
    list.value = results;
  });

  return {
    list,
  };
}
