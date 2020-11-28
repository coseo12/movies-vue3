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
    font-size: $font-size-h3;
    margin-left: 5px;
    position: relative;
    letter-spacing: 7px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    -webkit-box-reflect: below 1px linear-gradient(transparent, $color-reflect);
    color: $font-color-default;
    text-shadow: $text-shadow-nav;
    margin-bottom: 10px;

    &:hover {
      animation: animate 4s linear infinite;
    }
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
    color: $font-color-logo;
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
    color: $font-color-default;
    text-shadow: $text-shadow-nav;
  }
}
</style>
