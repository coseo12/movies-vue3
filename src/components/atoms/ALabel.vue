<template>
  <div class="a-label">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.a-label {
  margin: 2vh 2.5vw;
  font-size: $font-size-h1;
  text-shadow: $text-shadow-nav;
}
</style>
