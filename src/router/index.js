import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "main page",
      },
    },
    {
      path: "/change-background",
      name: "ChangeBackground",
      component: () => import("../pages/ChangeBackground.vue"),
      meta: {
        title: "change Background",
      },
    },
    {
      path: "/bmi",
      name: "BMI",
      component: () => import("../views/bmiPage.vue"),
      meta: {
        title: "BMI",
      },
    },
    {
      path: "/modal",
      name: "Modal",
      component: () => import("../pages/Modal.vue"),
      meta: {
        title: "Moadal",
      },
    },
    {
      path: "/todo",
      name: "Todo",
      component: () => import("../pages/Todo.vue"),
      meta: {
        title: "Tasks",
      },
    },
    {
      path: "/users",
      name: "Users",
      component: () => import("../pages/Users.vue"),
      meta: {
        title: "List of users",
      },
    },
    {
      path: "/form",
      name: "Form",
      component: () => import("../pages/Form.vue"),
      meta: {
        title: "Form validation",
      },
    },
    {
      path: "/auto-input",
      name: "AutoInput",
      component: () => import("../pages/AutoInput.vue"),
      meta: {
        title: "Auto input",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `vue | ${to.meta.title}`;
  next();
});

export default router;
