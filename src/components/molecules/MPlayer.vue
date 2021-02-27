<template>
  <iframe
    id="player"
    type="text/html"
    :width="width"
    :height="height"
    :src="
      `https://www.youtube.com/embed/${id}?autoplay=${autoplay}&mute=${autoplay}&enablejsapi=1`
    "
    allow="autoplay"
    frameborder="0"
  ></iframe>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
      default: 'hRhyJPmfoNg',
    },
    width: {
      type: String,
      required: false,
      default: `640`,
    },
    height: {
      type: String,
      required: false,
      default: `360`,
    },
    autoplay: {
      type: String,
      required: false,
      default: '1',
    },
  },
};
</script>

<style></style>
