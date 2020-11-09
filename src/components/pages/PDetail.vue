<template>
  <div class="p-detail">
    <t-detail :data="data" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import TDetail from '@/components/templates/TDetail';

export default {
  components: {
    TDetail,
  },
  setup() {
    const route = useRoute();
    const data = ref({
      id: route.params.id,
      name: route.params.name,
      res: [],
    });

    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped></style>
