import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/learn-more',
    name: 'learnMore',
    component: () => import('../views/LearnMorePage.vue'),
  },
  {
    path: '/reviews',
    name: 'reviewsPage',
    component: () => import('../views/ReviewPage.vue'),
  },
  {
    path: '/media',
    name: 'mediaPage',
    component: () => import('../views/MediaPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },
});

export default router;
