<template>
  <div id="nav">
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/movie">Movie</router-link> |
    <router-link to="/tv">Tv</router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_global.scss';
</style>
