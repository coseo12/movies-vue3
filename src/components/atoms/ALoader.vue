<template>
  <div class="a-loader"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.a-loader {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    transparent,
    transparent 40%,
    $color-loader
  );

  animation: animate 2s linear infinite;

  &:before {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: $color-background;
    border-radius: 50%;
    z-index: 1000;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: $color-background;
    border-radius: 50%;
    z-index: 1;
    filter: blur(30px);
    background: linear-gradient(
      45deg,
      transparent,
      transparent 40%,
      $color-loader
    );
  }
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>
