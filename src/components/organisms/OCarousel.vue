<template>
  <div class="o-carousel">
    <div class="box" ref="box" :style="style" @transitionend="transitionend">
      {{ data }}
      <template v-if="card === 'title'">
        <m-t-card
          v-for="(data, i) in list"
          :key="data.id"
          :id="data.id"
          :title="data.title"
          :src="data.src"
          :ref="
            el => {
              cardEls[i] = el;
            }
          "
          class="card"
          @click="toDetail"
        />
      </template>
      <template v-else>
        <m-r-card
          v-for="(data, i) in list"
          :key="data.id"
          :id="data.id"
          :title="data.title"
          :src="data.src"
          :rank="data.rank"
          :ref="
            el => {
              cardEls[i] = el;
            }
          "
          class="card"
          @click="toDetail"
        />
      </template>
    </div>
    <div v-if="showBtn" class="prev btn" @click="prevFn">
      <a-icon class="icon" name="left" color="#ffffff" size="22px" />
    </div>
    <div v-if="showBtn" class="next btn" @click="nextFn">
      <a-icon class="icon" name="right" color="#ffffff" size="22px" />
    </div>
  </div>
</template>

<script>
import { ref, onBeforeUpdate, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import MTCard from '@/components/molecules/MTCard';
import MRCard from '@/components/molecules/MRCard';
import AIcon from '@/components/atoms/AIcon';

export default {
  components: {
    MTCard,
    MRCard,
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
    const showBtn = ref(true);
    const btnLock = ref(false);
    const total = ref(0);
    const current = ref(0);
    const page = ref(5);
    const cardEls = ref([]);
    const style = ref({
      left: 0,
      transitionDelay: `0s`,
      transitionDuration: `0.8s`,
      transitionTimingFunction: `ease-in-out`,
      transitionProperty: `left`,
    });
    const list = ref([]);
    const listLen = ref(0);
    const slideLen = ref(0);

    const router = useRouter();
    const route = useRoute();

    const toDetail = () => {
      router.push({
        name: 'detail',
        params: {
          id: props.id,
          name: route.name,
        },
      });
    };

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
        showBtn.value = false;
        style.value.left = 0;
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
      btnLock.value = true;
      if (type === 'next') {
        style.value.left = `${slideLen.value}px`;
        style.value.transitionDuration = `1s`;
      } else {
        style.value.left = `${-slideLen.value}px`;
        style.value.transitionDuration = `1s`;
      }
    };

    const prevFn = () => {
      if (btnLock.value) return;
      current.value =
        props.data.length / page.value === 0
          ? (current.value = 0)
          : current.value - 1;
      moveSlide('prev');
    };
    const nextFn = () => {
      if (btnLock.value) return;
      current.value =
        props.data.length / page.value === current.value
          ? 0
          : current.value + 1;
      moveSlide('next');
    };

    const transitionend = e => {
      if (e.propertyName === 'left') {
        setTimeout(() => {
          style.value.left = 0;
          style.value.transitionDuration = '';
          list.value = getDataSlice();
          btnLock.value = false;
        }, 100);
      }
    };

    const setSlideLen = () => {
      if (cardEls.value.length === 0) return;
      const idx = page.value + 1;
      // const prev = cardEls.value[idx]?.$el.getBoundingClientRect();
      const cur = cardEls.value[idx]?.$el.getBoundingClientRect();
      const next = cardEls.value[idx + page.value]?.$el.getBoundingClientRect();
      slideLen.value = cur.left - next.left;
    };

    list.value = getDataSlice();

    const windowResize = () => {
      setSlideLen();
    };

    onMounted(() => {
      setSlideLen();
      window.addEventListener('resize', windowResize);
    });

    // make sure to reset the refs before each update
    onBeforeUpdate(() => {
      cardEls.value = [];
    });

    onUnmounted(() => {
      window.removeEventListener('resize', windowResize);
    });

    return {
      list,
      current,
      page,
      prevFn,
      nextFn,
      cardEls,
      style,
      transitionend,
      toDetail,
      showBtn,
    };
  },
};
</script>

<style lang="scss" scoped>
.o-carousel {
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
    width: 2.1vw;
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
