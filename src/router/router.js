import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Home.vue"
import Contatti from "../pages/Contatti.vue"
import About from "../pages/About.vue"
import Gallery from "../pages/Gallery.vue"
import Collaborazioni from "../pages/Collaborazioni.vue"
import Vip from "../pages/Vip.vue"


const routes = [

    {
        path: "/",
        name: "home",
        component: Home,
    },

    {
        path: "/contatti",
        name: "contatti",
        component: Contatti,
    },

    {
        path: "/gallery",
        name: "gallery",
        component: Gallery,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/collaborazioni",
        name: "collaborazioni",
        component: Collaborazioni,
    },
    {
        path: "/vip",
        name: "vip",
        component: Vip,
    },
  

  


];

    const router = createRouter({history: createWebHistory(),routes});

    export default router;
 
