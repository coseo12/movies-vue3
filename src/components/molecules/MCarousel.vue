<template>
  <div class="m-carousel">
    <div class="box" :style="style">
      <m-t-card
        v-for="(data, i) in list"
        :key="i"
        :title="`title${data}`"
        :ref="
          el => {
            cardEls[i] = el;
          }
        "
        class="card"
      />
    </div>
    <div class="prev" @click="prevFn"></div>
    <div class="next" @click="nextFn"></div>
  </div>
</template>

<script>
import { ref, onBeforeUpdate, onMounted, onUpdated } from 'vue';
import MTCard from '@/components/molecules/MTCard';

const data = [];
for (let i = 0; i < 50; i++) {
  data.push(i);
}

export default {
  components: {
    MTCard,
  },
  props: {
    // data: {
    //   type: Array,
    //   required: false,
    //   default: () => [],
    // },
    card: {
      type: String,
      required: false,
      default: 'title',
    },
  },
  setup() {
    const total = ref(0);
    const current = ref(0);
    const page = ref(5);
    const cardEls = ref([]);
    const style = ref({
      left: 0,
      transition: `left 1s linear`,
    });
    const list = ref([]);
    const listLen = ref(0);
    const slideLen = ref();

    const getArrayProxy = arr =>
      new Proxy(arr, {
        get(target, prop, receiver) {
          if (prop < 0) {
            // arr[1] 같은 형태로 배열 요소에 접근하는 경우에도
            // prop은 문자열이기 때문에 숫자로 바꿔줘야 합니다.
            prop = +prop + target.length;
          }
          return Reflect.get(target, prop, receiver);
        },
      });

    const getDataSlice = () => {
      if (data.length === 0) return [];

      const items = getArrayProxy([...data]);
      const start = current.value * page.value;
      const arr = [];

      total.value = items.length - 1;

      let totalPage = page.value * 3 + 2;
      let prev = start - page.value - 1;

      if (total.value <= page.value - 1) {
        return items.slice(0);
      } else {
        while (totalPage) {
          if (total.value < prev) prev = 0;
          else if (total.value < -prev)
            prev = total.value - (-prev - total.value);
          const item = items[prev];
          arr.push(item);
          prev++;
          totalPage--;
        }
        listLen.value = arr.length;
        return arr;
      }
    };

    const moveSlide = type => {
      console.log('a', style.value);
      if (type === 'next') {
        style.value.left = `${slideLen.value}px`;
        style.value.transition = `left 1s linear`;
      } else {
        style.value.left = `${slideLen.value}px`;
        style.value.transition = `left 1s linear`;
      }
    };

    const prevFn = () => {
      current.value = current.value - 1;
      moveSlide('prev');
      setTimeout(() => {
        list.value = getDataSlice();
      }, 1000);
    };
    const nextFn = () => {
      current.value = current.value + 1;
      // moveSlide('next');
      setTimeout(() => {
        list.value = getDataSlice();
      }, 1000);
    };

    const setSlideLen = () => {
      const idx = page.value + 1;
      // const prev = cardEls.value[idx]?.$el.getBoundingClientRect();
      const cur = cardEls.value[idx]?.$el.getBoundingClientRect();
      const next = cardEls.value[idx + page.value]?.$el.getBoundingClientRect();
      slideLen.value = cur.left - next.left;
    };

    list.value = getDataSlice();

    onMounted(() => {
      setSlideLen();
    });

    // make sure to reset the refs before each update
    onBeforeUpdate(() => {
      cardEls.value = [];
    });

    onUpdated(() => {
      setSlideLen();
    });

    return {
      list,
      current,
      page,
      prevFn,
      nextFn,
      cardEls,
      style,
    };
  },
};
</script>

<style lang="scss" scoped>
.m-carousel {
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;

  .box {
    position: relative;
    display: flex;

    .card {
      margin-left: 0.5vw;
    }
    .card:first-child {
      margin-left: 0;
    }
  }

  .prev,
  .next {
    position: absolute;
    width: 2vw;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
}
</style>
