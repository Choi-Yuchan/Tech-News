import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/ask",
    component: () => import("@/views/AskPage.vue"),
  },
  {
    path: "/jobs",
    component: () => import("@/views/JobsPage.vue"),
  },
  {
    path: "/news",
    component: () => import("@/views/NewsPage.vue"),
  },
  {
    path: "/item",
    component: () => import("@/views/ItemPage.vue"),
  },
  {
    path: "/user/:id",
    component: () => import("@/views/UserPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
