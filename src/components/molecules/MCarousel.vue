<template>
  <div class="m-carousel">
    <div class="box" ref="box" :style="style" @transitionend="transitionend">
      <m-t-card
        v-for="(data, i) in list"
        :key="data.id"
        :title="data.title"
        :src="data.src"
        :ref="
          el => {
            cardEls[i] = el;
          }
        "
        class="card"
      />
    </div>
    <div class="prev btn" @click="prevFn">
      <a-icon class="icon" name="left" color="#ffffff" size="22px" />
    </div>
    <div class="next btn" @click="nextFn">
      <a-icon class="icon" name="right" color="#ffffff" size="22px" />
    </div>
  </div>
</template>

<script>
import { ref, onBeforeUpdate, onMounted, onUpdated } from 'vue';
import MTCard from '@/components/molecules/MTCard';
import { AIcon } from '@/components/atoms';

export default {
  components: {
    MTCard,
    AIcon,
  },
  props: {
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
    card: {
      type: String,
      required: false,
      default: 'title',
    },
  },
  setup(props) {
    const total = ref(0);
    const current = ref(0);
    const page = ref(5);
    const cardEls = ref([]);
    const style = ref({
      left: 0,
      transitionDelay: `0s`,
      transitionDuration: `0.5s`,
      transitionTimingFunction: `linear`,
      transitionProperty: `left`,
    });
    const list = ref([]);
    const listLen = ref(0);
    const slideLen = ref(0);

    const getArrayProxy = arr =>
      new Proxy(arr, {
        get(target, prop, receiver) {
          if (prop < 0) {
            prop = +prop + target.length;
          }
          return Reflect.get(target, prop, receiver);
        },
      });

    const getDataSlice = () => {
      if (props.data.length === 0) return [];

      const items = getArrayProxy([...props.data]);
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
      if (type === 'next') {
        style.value.left = `${slideLen.value}px`;
        style.value.transitionDuration = `0.5s`;
      } else {
        style.value.left = `${-slideLen.value}px`;
        style.value.transitionDuration = `0.5s`;
      }
    };

    const prevFn = () => {
      current.value =
        props.data.length / page.value === 0
          ? (current.value = 0)
          : current.value - 1;
      moveSlide('prev');
    };
    const nextFn = () => {
      current.value =
        props.data.length / page.value === current.value
          ? 0
          : current.value + 1;
      moveSlide('next');
    };

    const transitionend = e => {
      if (e.propertyName === 'left') {
        style.value.left = 0;
        style.value.transitionDuration = '';
        list.value = getDataSlice();
      }
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

    onUpdated(() => {});

    return {
      list,
      current,
      page,
      prevFn,
      nextFn,
      cardEls,
      style,
      transitionend,
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

  &:hover > .btn {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

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
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 2vw;
    height: 100%;
    z-index: 1;
    opacity: 0;
    background-color: rgba(25, 25, 25, 0.9);
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;

    .icon {
      opacity: 0.9;
    }
  }

  .prev {
    left: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .next {
    right: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
}
</style>
