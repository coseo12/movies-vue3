<template>
  <div class="o-lolomo">
    <a-label :title="title" />
    <m-carousel :data="data" :card="card" />
  </div>
</template>

<script>
import { ALabel } from '@/components/atoms';
import { MCarousel } from '@/components/molecules';

export default {
  components: {
    MCarousel,
    ALabel,
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
    title: {
      type: String,
      required: false,
      default: 'title',
    },
  },
};
</script>

<style lang="scss" scoped>
.o-lolomo {
}
</style>
