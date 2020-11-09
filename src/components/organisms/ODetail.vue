<template>
  <div class="o-detail">
    <m-poster class="o-detail__poster" />
    <m-content />
  </div>
</template>

<script>
import MPoster from '@/components/molecules/MPoster';
import MContent from '@/components/molecules/MContent';

export default {
  components: {
    MPoster,
    MContent,
  },
};
</script>

<style lang="scss" scoped>
.o-detail {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
