<template>
  <div class="o-lolomo">
    <m-carousel :data="data" :card="card" />
  </div>
</template>

<script>
import { MCarousel } from '@/components/molecules';

export default {
  components: {
    MCarousel,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    card: {
      type: String,
      required: false,
      default: 'title',
    },
  },
};
</script>

<style lang="scss" scoped>
.o-lolomo {
  overflow: hidden;
}
</style>
