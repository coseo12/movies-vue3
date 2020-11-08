<template>
  <div class="a-icon">
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-for="(d, i) in icon"
        :key="i"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        :d="d"
      ></path>
    </svg>
  </div>
</template>

<script>
import { ref } from 'vue';

const iconList = {
  search: ['M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'],
  play: [
    'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z',
    'M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  ],
  info: ['M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'],
  film: [
    'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
  ],
  plus: ['M12 6v6m0 0v6m0-6h6m-6 0H6'],
  down: ['M19 9l-7 7-7-7'],
  heart: [
    'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  ],
  ban: [
    'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
  ],
  right: ['M14 5l7 7m0 0l-7 7m7-7H3'],
  left: ['M10 19l-7-7m0 0l7-7m-7 7h18'],
};

export default {
  name: 'AIcon',
  props: {
    size: {
      type: String,
      required: false,
      default: `12px`,
    },
    color: {
      type: String,
      required: false,
      default: `#ffffff`,
    },
    name: {
      String,
      required: true,
    },
  },
  setup({ name }) {
    const icon = ref(iconList[name]);

    return {
      icon,
    };
  },
};
</script>

<style lang="scss" vars="{ size, color }" scoped>
.a-icon {
  width: var(--size);

  svg {
    color: var(--color);
  }
}
</style>
