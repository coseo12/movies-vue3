import { createRouter, createWebHistory } from 'vue-router';
import { PDashboardPage, PMoviePage, PTvPage } from '@/components/pages';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: PDashboardPage,
  },
  {
    path: '/movie',
    name: 'movie',
    component: PMoviePage,
  },
  {
    path: '/tv',
    name: 'tv',
    component: PTvPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
