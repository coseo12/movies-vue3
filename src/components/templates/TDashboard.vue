<template>
  <div class="t-dashboard">
    <o-billboard v-show="true" />
    <div class="t-dashboard__movies">
      <o-lolomo />
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<script>
import { OBillboard, OLolomo } from '@/components/organisms';

export default {
  components: {
    OBillboard,
    OLolomo,
  },
};
</script>

<style lang="scss" scoped>
.t-dashboard {
  position: relative;
  display: flex;
  flex-direction: column;
}
.t-dashboard__movies {
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
