import { createApp } from 'vue';
import { PApp } from '@/components/pages';
import router from '@/router';

createApp(PApp)
  .use(router)
  .mount('#app');
