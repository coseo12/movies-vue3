<template>
  <div class="t-detail">
    <a-img class="t-detail__bg" />
    <o-detail class="t-detail__contents" />
  </div>
</template>

<script>
import AImg from '@/components/atoms/AImg';
import ODetail from '@/components/organisms/ODetail';

export default {
  components: { AImg, ODetail },
};
</script>

<style lang="scss" scoped>
.t-detail {
  position: relative;
  width: 100vw;
  height: 100vh;

  .t-detail__bg {
    width: 100vw;
    height: 100%;
    opacity: 0.5;
    filter: blur(4px);
  }

  .t-detail__contents {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 80vh;
  }
}
</style>
