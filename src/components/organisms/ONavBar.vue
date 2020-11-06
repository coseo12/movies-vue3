<template>
  <div class="o-nav-bar">
    <div class="o-nav-bar__menu">
      <a-logo />
      <m-menu-bar :menuList="menuList" />
    </div>
    <div class="o-nav-bar__info">
      <a-icon-search
        class="search-icon"
        size="22px"
        @click="search = !search"
      />
      <a-input v-show="search" @keyup="searchFn" maxlength="40" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ALogo, AIconSearch, AInput } from '@/components/atoms';
import { MMenuBar } from '@/components/molecules';

export default {
  components: {
    MMenuBar,
    ALogo,
    AIconSearch,
    AInput,
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
  setup() {
    const search = ref(false);
    const txt = ref('');

    return { search, txt };
  },
};
</script>

<style lang="scss" scoped>
.o-nav-bar {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.o-nav-bar__menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
}
.o-nav-bar__info {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px;

  cursor: pointer;
  z-index: 1;
  .search-icon {
    z-index: 1;
  }

  input {
    position: absolute;
    left: -285px;
    width: 320px;
    z-index: 0;
    background-color: #141414;
  }
}
</style>
