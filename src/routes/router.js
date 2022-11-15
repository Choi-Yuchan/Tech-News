import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/ask",
    name: "ask",
    component: () => import("@/views/AskPage.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("@/views/JobsPage.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/NewsPage.vue"),
  },
  {
    path: "/item/:id",
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
