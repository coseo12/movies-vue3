import { onMounted, ref } from 'vue';
import { getTrending } from '@/api/list';
export default function useFetchMovieList(type) {
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
