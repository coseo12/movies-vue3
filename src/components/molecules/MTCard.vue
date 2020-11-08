<template>
  <div class="m-t-card">
    <a-img class="m-t-card__img" :src="src" />
  </div>
</template>

<script>
import { AImg } from '@/components/atoms';

export default {
  components: {
    AImg,
  },
  props: {
    src: {
      type: String,
      required: false,
      default:
        'https://cdn3.movieweb.com/i/article/ltBX7h8cBIkWHiRjfZAVaLYhrDfIC5/1200:100/The-Queens-Gambit-Trailer.jpg',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.m-t-card {
  position: relative;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-weight: $font-weight-medium;
  flex: 0 0 auto;

  .m-t-card__img {
    width: 18.5vw;
    /* min-width: 300px; */
    height: 50vh;
    /* min-height: 150px; */
    transform: scale(1);
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.5s ease-in-out;
    }
  }

  .title {
    position: absolute;
    left: 0;
    top: 0;
    margin: 10px;
    animation: animate 1s ease-in-out;
  }

  .rating {
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
    font-size: $font-size-s3;
    color: $color-rating;
    animation: animate 1s ease-in-out;
  }

  @keyframes animate {
    0%,
    50%,
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
