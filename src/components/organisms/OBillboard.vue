<template>
  <div class="o-billboard">
    <a-img class="o-billboard__img" :src="src" />
    <m-meta-info
      class="o-billboard__meta-box"
      :title="title"
      :content="content"
    />
    <m-player class="m-player" id="KGWhSuXMvZA" width="380" height="220" />
  </div>
</template>

<script>
import AImg from '@/components/atoms/AImg';
import MMetaInfo from '@/components/molecules/MMetaInfo';
import MPlayer from '@/components/molecules/MPlayer';

export default {
  components: {
    AImg,
    MMetaInfo,
    MPlayer,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Title',
    },
    content: {
      type: String,
      required: false,
      default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis
      ea, voluptatibus perspiciatis provident dolores quos mollitia omnis
      voluptates ratione cupiditate consectetur. Libero iusto consectetur
      doloribus architecto quod hic similique!`,
    },
    src: {
      type: String,
      required: false,
      default:
        'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701806056.jpg',
    },
  },
};
</script>

<style lang="scss" scoped>
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

  .m-player {
    position: absolute;
    left: 1%;
    bottom: 55%;
  }
}
</style>
