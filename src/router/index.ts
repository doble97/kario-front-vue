import HomePage from "@/modules/landing/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            //Esto no es carga perezosa, por lo que siempre se va a cargar en memoria
            component: HomePage,
            name: "home",
        },
        {
            path: "/about",
            //Carga perezosa
            component: () => import("@/modules/landing/pages/AboutPage.vue"),
            name: "about",
        },
    ],
});
export default router;
