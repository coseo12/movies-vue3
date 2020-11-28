<template>
  <button class="a-button">
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.a-button {
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border: 0;
  box-shadow: 0.2px 0.4px 0.8px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: $button-opacity-hover;
  }
}
</style>
