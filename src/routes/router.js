import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path:'/',
    component: () => import('@/views/MainPage.vue'),
  },
{
  path:'/login',
  component: () => import('@/views/LoginPage.vue')
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;