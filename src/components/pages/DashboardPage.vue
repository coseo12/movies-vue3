<template>
  <div>
    Dashboard
  </div>
</template>
<script>
import { watchEffect } from 'vue';
import useFetchList from '@/composables/useFetchList';
export default {
  name: 'DashboardPage',
  setup() {
    const { movieList } = useFetchList();
    watchEffect(() => {
      movieList.value.forEach(i => console.log(i));
    });
  },
};
</script>
