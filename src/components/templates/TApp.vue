<template>
  <div class="t-app">
    <o-nav-bar
      :menuList="menuList"
      :searchTxt="searchTxt"
      :searchFn="searchFn"
    />
    <router-view />
    <!-- <o-footer /> -->
  </div>
</template>

<script>
import ONavBar from '@/components/organisms/ONavBar';
// import OFooter from '@/components/organisms/OFooter';

export default {
  components: {
    ONavBar,
    // OFooter,
  },
  props: {
    menuList: {
      type: Array,
      required: true,
    },
    searchTxt: {
      type: String,
      required: true,
    },
    searchFn: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
