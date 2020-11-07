<template>
  <div class="p-app">
    <t-app v-bind="appBar" />
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { TApp } from '@/components/templates';

export default {
  name: 'App',
  components: { TApp },
  setup() {
    const loading = ref(true);
    const menuList = ref([
      { text: '홈', to: '/' },
      { text: 'TV프로그램', to: '/tv' },
      { text: '영화', to: '/movie' },
    ]);
    const searchTxt = ref('');
    const searchFn = event => (searchTxt.value = event.target.value);
    const appBar = reactive({
      menuList,
      searchTxt,
      searchFn,
    });

    return { appBar, loading };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_global.scss';
</style>
