import { createRouter, createWebHistory } from 'vue-router';
import { PDashboard, PMovie, PTv } from '@/components/pages';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
