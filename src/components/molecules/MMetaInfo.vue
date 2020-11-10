<template>
  <div class="m-meta-info">
    <div class="m-meta-info__title">
      <a-icon class="icon" size="22px" name="film" />
      <span class="title">
        {{ title }}
      </span>
    </div>
    <div class="m-meta-info__content">
      {{ content }}
    </div>
    <div class="m-meta-info__btn-box">
      <!-- <a-button class="play-btn">
        <div class="btn__info">
          <a-icon class="icon" size="22px" name="play" color="#0e3742" />
          <span class="text">재생</span>
        </div>
      </a-button> -->
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
import AButton from '@/components/atoms/AButton';
import AIcon from '@/components/atoms/AIcon';

export default {
  components: {
    AButton,
    AIcon,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    content: {
      type: String,
      required: false,
      default: '',
    },
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
  width: 400px;

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
    font-weight: $font-weight-light;
    color: $font-color-default;
    line-height: 20px;
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
