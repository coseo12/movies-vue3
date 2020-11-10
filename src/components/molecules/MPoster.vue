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
        'https://cdn.shopify.com/s/files/1/1416/8662/products/Interstellar_2014_french_original_film_art_1200x.jpg?v=1596410086',
    },
  },
};
</script>

<style lang="scss" scoped>
.m-poster {
  .m-poster__img {
    width: 30vw;
    height: 80vh;
    border-radius: 10px;
  }
}
</style>
