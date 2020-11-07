<template>
  <div class="o-billboard">
    <a-img
      class="o-billboard__img"
      src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701806056.jpg"
    />
    <m-meta-info />
  </div>
</template>

<script>
import { AImg } from '@/components/atoms';
import { MMetaInfo } from '@/components/molecules';

export default {
  components: {
    AImg,
    MMetaInfo,
  },
};
</script>

<style lang="scss" scoped>
.o-billboard__img {
  width: 100vw;
  height: 90vh;
}
</style>
