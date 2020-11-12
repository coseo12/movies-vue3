import { onMounted, ref } from 'vue';
import { getTrending } from '@/api/list';
export default function useFetchTrendingList(type) {
  const list = ref([]);

  onMounted(async () => {
    const {
      data: { results },
    } = await getTrending(type);
    list.value = results;
  });

  return {
    list,
  };
}
