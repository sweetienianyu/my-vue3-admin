import { createRouter, createWebHistory } from "vue-router";
import { UserLayout } from "@/layouts"
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/user',
    name: 'User',
    component: UserLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ "@/views/user/Login.vue"),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "registet" */ "@/views/user/Register.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
