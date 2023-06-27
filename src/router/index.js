import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"), //test_v
  mode: "history",
  // base: "/test_v/",
  routes: [
    {
      path: "/",
      name: "dahsboard",
      component: () => import("../views/admin/Dashboard.vue"),
    },
    {
      path: "/alerts",
      name: "alert",
      component: () => import("../views/admin/Alert.vue"),
    },
    {
      path: "/buttons",
      name: "button",
      component: () => import("../views/admin/Button.vue"),
    },
    {
      path: "/forms",
      name: "forms",
      component: () => import("../views/admin/Forms.vue"),
    },
    {
      path: "/BasicTable",
      name: "BasicTable",
      component: () => import("../views/admin/BasicTable.vue"),
    },
    {
      path: "/DataTable",
      name: "DataTable",
      component: () => import("../views/admin/DataTable.vue"),
    },
  ],
  linkActiveClass: "active-menu",
});

export default router;
