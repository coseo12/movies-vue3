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
      const ran = Math.floor(Math.random() * 10);
      const src = [
        'https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg',
        'https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_08339151-d79a-4b7b-8bc7-dcad04881c2c.jpg?v=1573629460',
        'https://compote.slate.com/images/77440fdf-a599-4fd1-90fc-cc619aa7419d.jpg',
        'https://c8.alamy.com/comp/RGRHYN/movie-poster-alpha-2018-RGRHYN.jpg',
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362',
        'https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg',
        'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
        'https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089',
        'https://images-na.ssl-images-amazon.com/images/I/71Tw-XHzu1L._AC_SL1200_.jpg',
        'https://sep.yimg.com/ay/htmarket/now-showing-movie-poster-frame-24.gif',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3_b5dEYJNSOTjW9RuiszPISiWQ19qR0Xwzw&usqp=CAU',
      ];
      obj.id = i;
      obj.title = `title${i}`;
      obj.src = src[ran];
      obj.rating = ran;
      data.value.push(obj);
    }
    return {
      data,
    };
  },
};
</script>
