<template>
  <div class="t-dashboard">
    <o-billboard
      title="Movies"
      src="https://i.pinimg.com/originals/2d/68/b4/2d68b431201137ee98e4b54434abfc5a.jpg"
    />
    <div class="t-dashboard__movies">
      <o-lolomo
        class="lolomo"
        :data="cardData.popular"
        card="rank"
        title="POPULAR MOVIES"
      />
      <o-lolomo
        class="lolomo"
        :data="cardData.nowPlaying"
        title="NOWPLAYING MOVIES"
      />
      <o-lolomo
        class="lolomo"
        :data="cardData.upcoming"
        title="UPCOMING MOVIES"
      />
    </div>
  </div>
</template>

<script>
import OBillboard from '@/components/organisms/OBillboard';
import OLolomo from '@/components/organisms/OLolomo';

export default {
  components: {
    OBillboard,
    OLolomo,
  },
  props: {
    cardData: {
      type: Object,
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
