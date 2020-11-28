<template>
  <div class="m-overview">
    <div class="title">
      <span class="txt">{{ title }}</span>
      <span class="vote">⭐ {{ vote }} / 10</span>
    </div>
    <a
      :href="`https://www.imdb.com/title/${imdb}`"
      target="_blank"
      class="imdb"
    >
      {{ `https://www.imdb.com` }}
    </a>
    <div class="genres">
      <span v-for="(txt, i) in genres" :key="i" class="box">
        <span class="txt">{{ txt }}</span>
        <span class="divider">•</span>
      </span>
    </div>
    <div class="overview">
      {{ overview }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Interstellar',
    },
    genres: {
      type: Array,
      required: false,
      default: () => ['SF', 'Family'],
    },
    overview: {
      type: String,
      required: false,
      default: `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas obcaecati
      neque fuga saepe minus inventore? Quos dolore id fugit nihil quasi dolorum
      velit porro. Numquam inventore ipsam exercitationem libero possimus.`,
    },
    imdb: {
      type: String,
      required: false,
      default: 'tt0816692',
    },
    vote: {
      type: Number,
      required: false,
      default: 8.5,
    },
  },
};
</script>

<style lang="scss" scoped>
.m-overview {
  .title {
    margin-top: 3vh;
    display: flex;
    align-items: flex-end;

    .txt {
      font-size: $font-size-title;
    }

    .vote {
      font-size: $font-size-s3;
      margin: 5px 10px;
    }
  }
  .imdb {
    font-size: $font-size-s4;
    text-decoration: underline;
    color: $font-color-default;
  }
  .genres {
    margin-top: 3vh;

    .box {
      .divider {
        margin: 0px 10px;
      }
    }

    .box:last-child {
      .divider {
        display: none;
      }
    }
  }
  .overview {
    margin-top: 2vh;
  }
}
</style>
