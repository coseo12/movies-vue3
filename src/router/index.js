import { createRouter, createWebHistory } from 'vue-router';
import { DashboardPage, MoviePage, TvPage } from '@/components/pages';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage,
  },
  {
    path: '/movie',
    name: 'movie',
    component: MoviePage,
  },
  {
    path: '/tv',
    name: 'tv',
    component: TvPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
