<template>
  <div class="t-loader">
    <div class="t-loader__el"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.t-loader {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);

  .t-loader__el {
    position: relative;
    width: 150px;
    height: 150px;
  }
}
</style>
