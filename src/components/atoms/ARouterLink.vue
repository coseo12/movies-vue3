<template>
  <router-link class="a-router-link" :to="to">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

a {
  cursor: pointer;
  text-decoration: none;
  color: $font-color-default;
  font-size: $font-size-default;
  font-weight: $font-weight-light;
  margin-left: 10px;
}
</style>
