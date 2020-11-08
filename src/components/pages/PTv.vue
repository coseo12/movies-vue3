<template>
  <div class="p-dashboard-page">
    <t-tv :cardData="data" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { TTv } from '@/components/templates';

export default {
  components: {
    TTv,
  },
  setup() {
    const data = ref([]);
    for (let i = 0; i < 50; i++) {
      const obj = {};
      const ran = Math.floor(Math.random() * 10);
      const src = [
        'https://cdn3.volusion.com/2dahj.3qwj9/v/vspfiles/photos/A7013-2.jpg?v-cache=1331225398',
        'https://posterspy.com/wp-content/uploads/2014/07/Sherlock-poster-s3-OFFICIAL.jpg',
        'https://img.moviepostershop.com/chuck-tv-movie-poster-2007-1010413273.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBbGwJWx26TDYw6EUH3pNxGaobGdIwMmofAA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCdauNduOGsv_oOOLzdVDNfsdupXCjBdSh6g&usqp=CAU',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/94ab2ad3-e0d4-4764-85ad-873af742bd4a/ddgnoxw-9ba28d4a-e212-4f2f-949a-fb3caedb3f3b.png/v1/fill/w_1280,h_1947,q_80,strp/euphoria_tv_poster_by_arkhamnatic_ddgnoxw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTRhYjJhZDMtZTBkNC00NzY0LTg1YWQtODczYWY3NDJiZDRhXC9kZGdub3h3LTliYTI4ZDRhLWUyMTItNGYyZi05NDlhLWZiM2NhZWRiM2YzYi5wbmciLCJoZWlnaHQiOiI8PTE5NDciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC85NGFiMmFkMy1lMGQ0LTQ3NjQtODVhZC04NzNhZjc0MmJkNGFcL2Fya2hhbW5hdGljLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.Hu_3HO51MWsf-3qdYnNTXw2GgWX3fetwC-UIYl8IDFs',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9uJn_glqgfm1_Qur95T3iDOY2Ci-MsEvCCw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPsEn5Oe4tZzzxOF91kdPUDpDqmtMIwD_tHQ&usqp=CAU',
        'https://tvseriesfinale.com/wp-content/uploads/2015/10/Marvels-Jessica-Jones-Netflix-TV-Shows-season-one.jpg',
        'https://media1.popsugar-assets.com/files/thumbor/iivpFJGNXxgeWn3EY2pkuwzNsug/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/01/647/n/1922283/8d790b1b78439c6f_TheWitcher_IGStory_Poster/i/Witcher-Netflix-TV-Series-Poster.jpg',
        'https://fightingbroke.com/wp-content/uploads/2014/08/zombieland-tv-poster.jpg',
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
