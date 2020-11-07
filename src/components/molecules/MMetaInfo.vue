<template>
  <div class="m-meta-info">
    <div class="m-meta-info__title">
      <a-icon class="icon" size="22px" name="film" />
      <span class="title">TItle</span>
    </div>
    <div class="m-meta-info__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis
      ea, voluptatibus perspiciatis provident dolores quos mollitia omnis
      voluptates ratione cupiditate consectetur. Libero iusto consectetur
      doloribus architecto quod hic similique!
    </div>
    <div class="m-meta-info__btn-box">
      <a-button class="play-btn">
        <div class="btn__info">
          <a-icon class="icon" size="22px" name="play" color="#0e3742" />
          <span class="text">재생</span>
        </div>
      </a-button>
      <a-button class="info-btn">
        <div class="btn__info">
          <a-icon class="icon" size="22px" name="info" color="#0e3742" />
          <span class="text">상세정보</span>
        </div>
      </a-button>
    </div>
  </div>
</template>

<script>
import { AButton, AIcon } from '@/components/atoms';

export default {
  components: {
    AButton,
    AIcon,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.m-meta-info {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px 20px;
  left: 10px;
  bottom: 350px;
  width: 400px;
  z-index: 0;

  .m-meta-info__title {
    display: flex;
    align-items: center;
    font-size: $font-size-h1;
    color: $font-color-default;

    .title {
      margin-left: 10px;
    }
  }

  .m-meta-info__content {
    margin: 20px 0;
    font-size: $font-size-h3;
    color: $font-color-default;
  }

  .m-meta-info__btn-box {
    .play-btn {
      background-color: $button-color-on;
    }

    .info-btn {
      margin-left: 20px;
      background-color: $button-color-info;
    }

    .play-btn,
    .info-btn {
      .btn__info {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 0 10px;

        .icon {
          color: $font-color-logo;
        }

        .text {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
