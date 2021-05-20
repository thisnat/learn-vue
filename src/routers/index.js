import { createWebHistory, createRouter } from "vue-router";
import Views from '@/views'

const routes = [
  {
    path: "/",
    name: "home",
    component: Views.Home,
  },
  {
    path: "/lab1",
    name: "lab1",
    component: Views.Lab1,
  },
  {
    path: "/lab2",
    name: "lab2",
    component: Views.Lab2,
  }
];

const router = createRouter({
  history: createWebHistory(),routes
});

export default router;