import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/admin/Dashboard.vue";

const router = createRouter({
  history: createWebHistory("/"), //test_v
  mode: "history",
  // base: "/test_v/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard,
    },
  ],
});

export default router;
