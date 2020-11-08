<template>
  <div class="a-img" :style="bgStyle" />
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    src: {
      type: String,
      required: false,
      default:
        'https://free4kwallpapers.com/uploads/originals/2020/05/01/interstellar-wallpaper.jpg',
    },
  },
  setup(props) {
    const bgStyle = computed(() => {
      const item = props.src;
      return {
        backgroundImage: `url(${item})`,
      };
    });
    return {
      bgStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
.a-img {
  width: inherit;
  height: inherit;
  background-size: cover;
  background-position: center center;
}
</style>
