module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-nomflix/' : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
};
