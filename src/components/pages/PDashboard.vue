<template>
  <div class="p-dashboard-page">
    <t-dashboard :cardData="list" />
  </div>
</template>

<script>
import { watchEffect, ref } from 'vue';
import TDashboard from '@/components/templates/TDashboard';
import useFetchList from '@/composables/useFetchList';
export default {
  components: {
    TDashboard,
  },
  setup() {
    const list = ref({ popular: [] });
    const all = useFetchList('all').list;
    watchEffect(() => {
      console.log(all);
      all.value.sort(function(a, b) {
        if (a.vote_average > b.vote_average) {
          return 1;
        }
        if (a.vote_average < b.vote_average) {
          return -1;
        }
        return 0;
      });
      all.value.forEach((i, idx) => {
        console.log(i);
        const obj = {};
        obj.id = i.id;
        obj.title = i.title;
        obj.src = `${process.env.VUE_APP_IMG_SRC}${i.poster_path}`;
        obj.rating = i.vote_average;
        obj.rank = idx;
        list.value.popular.push(obj);
      });
      console.log(list);
    });

    return {
      list,
    };
  },
};
</script>
