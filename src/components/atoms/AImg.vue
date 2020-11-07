<template>
  <div class="a-img" :style="bgStyle" />
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    src: {
      type: String,
      required: false,
      default:
        'https://free4kwallpapers.com/uploads/originals/2020/05/01/interstellar-wallpaper.jpg',
    },
  },
  setup({ src }) {
    const bgStyle = ref({
      backgroundImage: `url(${src})`,
    });

    return {
      bgStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
.a-img {
  background-size: cover;
  background-position: center center;
}
</style>
