import { createApp } from 'vue';
import { App } from '@/components/pages';
import router from '@/router';

createApp(App)
  .use(router)
  .mount('#app');
