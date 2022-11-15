import { createWebHistory, createRouter } from "vue-router";
import createListView from "@/views/CreateListView";

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    name: "news",
    component: createListView("NewsPage"),
  },
  {
    path: "/ask",
    name: "ask",
    component: createListView("AskPage"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: createListView("JobsPage"),
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
