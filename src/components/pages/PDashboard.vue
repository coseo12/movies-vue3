<template>
  <div class="p-dashboard-page">
    <t-dashboard :cardData="list" />
  </div>
</template>

<script>
import { watchEffect, ref } from 'vue';
import TDashboard from '@/components/templates/TDashboard';
import useFetchTrendingList from '@/composables/useFetchTrendingList';
export default {
  components: {
    TDashboard,
  },
  setup() {
    const list = ref({});
    const all = useFetchTrendingList('all').list;
    const movie = useFetchTrendingList('movie').list;
    const tv = useFetchTrendingList('tv').list;
    watchEffect(() => {
      all.value.sort(function(a, b) {
        if (a.vote_average > b.vote_average) {
          return 1;
        }
        if (a.vote_average < b.vote_average) {
          return -1;
        }
        return 0;
      });

      const fnMap = (item, idx) => {
        const obj = {};
        obj.id = item.id;
        obj.title = item.title;
        obj.src = `${process.env.VUE_APP_IMG_SRC}${item.poster_path}`;
        obj.rank = idx + 1;
        return obj;
      };

      const popular = all.value.map(fnMap);
      const movieRank = movie.value.map(fnMap);
      const tvRank = tv.value.map(fnMap);
      list.value = {
        popular,
        movieRank,
        tvRank,
      };
    });

    return {
      list,
    };
  },
};
</script>
