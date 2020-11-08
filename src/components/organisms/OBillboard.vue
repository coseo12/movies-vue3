<template>
  <div class="o-billboard">
    <a-img
      class="o-billboard__img"
      src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701806056.jpg"
    />
    <m-meta-info
      class="o-billboard__meta-box"
      title="Title"
      content="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis
      ea, voluptatibus perspiciatis provident dolores quos mollitia omnis
      voluptates ratione cupiditate consectetur. Libero iusto consectetur
      doloribus architecto quod hic similique!"
    />
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
@import '@/assets/scss/_variables.scss';

.o-billboard {
  position: relative;

  .o-billboard__img {
    width: 100vw;
    height: 80vh;

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        transparent,
        transparent,
        transparent,
        transparent,
        $color-background
      );
    }
  }

  .o-billboard__meta-box {
    position: absolute;
    left: 0;
    bottom: 20%;
  }
}
</style>
