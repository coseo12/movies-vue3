<template>
  <div class="o-lolomo">
    <a-label :title="title" />
    <o-carousel :data="data" :card="card" />
  </div>
</template>

<script>
import ALabel from '@/components/atoms/ALabel';
import OCarousel from '@/components/organisms/OCarousel';

export default {
  components: {
    OCarousel,
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

<style lang="scss" scoped></style>
