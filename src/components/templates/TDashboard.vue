<template>
  <div class="t-dashboard">
    <o-billboard />
    <div class="t-dashboard__movies">
      <m-carousel />
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<script>
import { OBillboard } from '@/components/organisms';
import { MCarousel } from '@/components/molecules';

export default {
  components: {
    OBillboard,
    MCarousel,
  },
};
</script>

<style lang="scss" scoped>
.t-dashboard {
  display: flex;
  flex-direction: column;
}
.t-dashboard__movies {
  display: flex;
  flex-direction: column;
}
</style>
