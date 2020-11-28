<template>
  <div class="m-menu-bar">
    <a-router-link
      v-for="(menu, idx) in menuList"
      :key="idx"
      :to="menu.to"
      class="m-menu-bar__link"
    >
      {{ menu.text }}
    </a-router-link>
  </div>
</template>

<script>
import ARouterLink from '@/components/atoms/ARouterLink';

export default {
  components: {
    ARouterLink,
  },
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.m-menu-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.m-menu-bar__link {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>
