<template>
  <div class="t-dashboard">
    <o-billboard
      title="Home"
      src="https://1.bp.blogspot.com/-WsNSf6jZvS0/XM3YV3O4ZDI/AAAAAAAACJ8/A7K0sxMcw_gb82SO9p7JYoAW9tPIIWxRQCKgBGAs/w0/john-wick-3-keanu-reeves-uhdpaper.com-4K-23.jpg"
    />
    <div class="t-dashboard__movies">
      <o-lolomo class="lolomo" :data="cardData" title="POPULAR MOVIES" />
      <o-lolomo class="lolomo" :data="cardData" title="POPULAR TV" />
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
