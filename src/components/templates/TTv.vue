<template>
  <div class="t-dashboard">
    <o-billboard
      title="TV"
      src="https://wallpaperaccess.com/full/2439222.jpg"
    />
    <div class="t-dashboard__movies">
      <o-lolomo class="lolomo" :data="cardData" title="POPULAR TV" />
      <o-lolomo class="lolomo" :data="cardData" title="TV SERISE" />
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
