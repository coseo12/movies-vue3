<template>
  <div class="p-dashboard-page">
    <t-dashboard :cardData="data" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { TDashboard } from '@/components/templates';

export default {
  components: {
    TDashboard,
  },
  setup() {
    const data = ref([]);
    for (let i = 0; i < 50; i++) {
      const obj = {};
      const rating = Math.floor(Math.random() * 5);
      const src = [
        'https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg',
        'https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_08339151-d79a-4b7b-8bc7-dcad04881c2c.jpg?v=1573629460',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSkdZ11oNeixagmQKl88OVGueMG3jiQ8kwXA&usqp=CAU',
        'https://c8.alamy.com/comp/RGRHYN/movie-poster-alpha-2018-RGRHYN.jpg',
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
        'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
      ];
      obj.id = i;
      obj.title = `title${i}`;
      obj.src = src[rating];
      obj.rating = rating;
      data.value.push(obj);
    }
    return {
      data,
    };
  },
};
</script>
