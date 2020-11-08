<template>
  <div class="t-dashboard">
    <o-billboard title="Movies" />
    <div class="t-dashboard__movies">
      <o-lolomo class="lolomo" :data="cardData" title="POPULAR MOVIE" />
      <o-lolomo class="lolomo" :data="cardData" title="NOWPLAY MOVIE" />
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
  props: {
    cardData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.t-dashboard {
  position: relative;
  display: flex;
  flex-direction: column;

  .t-dashboard__movies {
    position: relative;
    top: -10vh;
    display: flex;
    flex-direction: column;

    .lolomo:not(:first-child) {
      margin-top: 5vh;
    }
  }
}
</style>
