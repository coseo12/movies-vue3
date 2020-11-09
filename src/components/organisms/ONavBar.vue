<template>
  <div :class="mainClass">
    <div class="o-nav-bar__menu">
      <a-logo />
      <m-menu-bar :menuList="menuList" />
    </div>
    <div class="o-nav-bar__info">
      <a-icon
        class="search-icon"
        size="22px"
        name="search"
        @click="search = !search"
      />
      <a-input v-show="search" @keyup="searchFn" maxlength="30" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ALogo from '@/components/atoms/ALogo';
import AIcon from '@/components/atoms/AIcon';
import AInput from '@/components/atoms/AInput';
import MMenuBar from '@/components/molecules/MMenuBar';

export default {
  components: {
    MMenuBar,
    ALogo,
    AIcon,
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
    const mainClass = ref({
      [`o-nav-bar`]: true,
      scroll: false,
    });
    const search = ref(false);
    const txt = ref('');

    onMounted(() => {
      document.addEventListener('scroll', () => {
        const scollTop = document.scrollingElement.scrollTop;
        if (scollTop > 0) {
          mainClass.value.scroll = true;
        } else {
          mainClass.value.scroll = false;
        }
      });
    });

    return { search, txt, mainClass };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.o-nav-bar {
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background: linear-gradient($color-background, transparent);
  z-index: 10;
}

.scroll {
  background: $color-background;
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
    left: -250px;
    width: 280px;
    z-index: 0;
  }
}
</style>
