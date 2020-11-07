<template>
  <m-carousel>
    <m-t-card v-if="card === 'title'" />
    <m-r-card v-if="card === 'rank'" />
    <m-p-card v-if="card === 'panel'" />
  </m-carousel>
</template>

<script>
import { MCarousel, MTCard, MRCard, MPCard } from '@/components/molecules';

export default {
  components: {
    MCarousel,
    MTCard,
    MRCard,
    MPCard,
  },
  props: {
    card: {
      type: String,
      required: false,
      default: 'title',
    },
  },
};
</script>

<style lang="scss" scoped></style>
