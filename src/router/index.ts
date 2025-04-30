import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import WorkDetailView from '../views/WorkDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/works/:id', name: 'work-detail', component: WorkDetailView },
    // {
    //   path: "/:pathMatch(.*)*",
    //   component: NotFoundView,
    // },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 60,
      };
    }
    return { top: 0 };
  },
});

export default router;
