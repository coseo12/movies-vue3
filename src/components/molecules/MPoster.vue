<template>
  <div class="m-poster">
    <a-img class="m-poster__img" :src="bgImg" />
  </div>
</template>

<script>
import AImg from '@/components/atoms/AImg';

export default {
  components: {
    AImg,
  },
  props: {
    bgImg: {
      type: String,
      required: false,
      default:
        'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701806056.jpg',
    },
  },
};
</script>

<style lang="scss" scoped>
.m-poster {
  .m-poster__img {
    width: 30vw;
    height: 80vh;
  }
}
</style>
