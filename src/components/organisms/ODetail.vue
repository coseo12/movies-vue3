<template>
  <div class="o-detail">
    <m-poster class="o-detail__poster" />
    <m-overview class="o-detail__overview" />
  </div>
</template>

<script>
import MPoster from '@/components/molecules/MPoster';
import MOverview from '@/components/molecules/MOverview';

export default {
  components: {
    MPoster,
    MOverview,
  },
};
</script>

<style lang="scss" scoped>
.o-detail {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .o-detail__poster {
    grid-column: 1/ 2;
    grid-row: 1 / 3;
  }
  .o-detail__overview {
    grid-column: 2/ 3;
    grid-row: 1 / 2;
  }
}
</style>
