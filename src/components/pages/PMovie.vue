<template>
  <div class="p-dashboard-page">
    <t-movie :cardData="data" />
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue';
import TMovie from '@/components/templates/TMovie';
import useFetchPopularList from '@/composables/useFetchPopularList';
import { getNowPlayingMovies, getUpcomingMovies } from '@/api/list';
export default {
  components: {
    TMovie,
  },
  setup() {
    const data = ref({});
    const fetchData = useFetchPopularList('movie').list;

    const fnMap = (i, idx) => {
      const obj = {};
      obj.id = i.id;
      obj.title = i.title;
      obj.src = `${process.env.VUE_APP_IMG_SRC}${i.poster_path}`;
      obj.rank = idx + 1;
      obj.rating = i.vote_average;
      return obj;
    };

    onMounted(async () => {
      const {
        data: { results },
      } = await getNowPlayingMovies();
      data.value.nowPlaying = results.map(fnMap);

      const upcoming = await getUpcomingMovies();
      data.value.upcoming = upcoming.map(fnMap);
    });

    watchEffect(() => {
      const popularList = fetchData.value.map(fnMap);
      data.value.popular = popularList;
    });

    return {
      data,
    };
  },
};
</script>
