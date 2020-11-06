<template>
  <div class="m-logo" @click="$router.push('/')">
    <span class="m-logo__label">MOVIES</span>
  </div>
</template>

<style lang="scss" scoped>
.m-logo {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  .m-logo__label {
    font-size: 18px;
    margin-left: 5px;
    position: relative;
    letter-spacing: 7px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
    animation: animate 5s linear infinite;
    margin-bottom: 10px;
  }
}

@keyframes animate {
  0%,
  18%,
  20%,
  50.1%,
  60%,
  65.1%,
  80%,
  90.1%,
  92% {
    color: #0e3742;
    text-shdow: none;
  }
  18.1%,
  20.1%,
  30%,
  50%,
  60.1%,
  65%,
  80.1%,
  90%,
  92.1%,
  100% {
    color: #ffffff;
    text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4,
      0 0 80px #03bcf4, 0 0 160px #03bcf4;
  }
}
</style>
