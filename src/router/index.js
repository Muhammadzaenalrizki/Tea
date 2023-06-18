import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/admin/Dashboard.vue";
import Alert from "../views/admin/Alert.vue";
import Button from "../views/admin/Button.vue";
import Forms from "../views/admin/Forms.vue";

const router = createRouter({
  history: createWebHistory("/"), //test_v
  mode: "history",
  // base: "/test_v/",
  routes: [
    {
      path: "/",
      name: "dahsboard",
      component: Dashboard,
    },
    {
      path: "/alerts",
      name: "alert",
      component: Alert,
    },
    {
      path: "/buttons",
      name: "button",
      component: Button,
    },
    {
      path: "/forms",
      name: "forms",
      component: Forms,
    },
  ],
  linkActiveClass: "active-menu",
});

export default router;
