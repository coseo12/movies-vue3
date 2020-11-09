import { createRouter, createWebHistory } from 'vue-router';
import PDashboard from '@/components/pages/PDashboard';
import PMovie from '@/components/pages/PMovie';
import PTv from '@/components/pages/PTv';
import PDetail from '@/components/pages/PDetail';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: PDashboard,
  },
  {
    path: '/movie',
    name: 'movie',
    component: PMovie,
  },
  {
    path: '/tv',
    name: 'tv',
    component: PTv,
  },
  {
    path: '/detail',
    name: 'detail',
    component: PDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
