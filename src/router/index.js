import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '@/views/DashboardPage.vue';
import MoviePage from '@/views/MoviePage.vue';
import TvPage from '@/views/TvPage.vue';

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
