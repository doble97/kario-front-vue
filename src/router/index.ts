import AuthLayout from "@/modules/auth/layouts/AuthLayout.vue";
import LoginPage from "@/modules/auth/pages/LoginPage.vue";
import RegisterPage from "@/modules/auth/pages/RegisterPage.vue";
import NotFound404 from "@/modules/common/pages/NotFound404.vue";
// import HomePage from "@/modules/landing/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //AUTH
    {
      path: "/auth",
      //Esto no es carga perezosa, por lo que siempre se va a cargar en memoria
      component: AuthLayout,
      name: "auth",
      redirect: { name: "login" },
      children: [
        {
          path: "/login",
          component: LoginPage,
          name: "login",
        },
        {
          // path:'register'  La ruta sería url/auth/register
          path: "/register", //La ruta seria  url/register
          component: RegisterPage,
          name: "register",
        },
      ],
    },
    //LANDING
    {
      path: "/about",
      //Carga perezosa
      component: () => import("@/modules/landing/pages/AboutPage.vue"),
      name: "about",
    },
    {
      path: "/",
      component: () => import("@/modules/landing/pages/HomePage.vue"),
      name: "home",
    },
    //Not Found
    {
      path: "/:pathMatch(.*)*",
      // redirect: "/",
      component: NotFound404,
    },
  ],
});
export default router;
