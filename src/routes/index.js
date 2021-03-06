import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes =  [
    { 
        path: '/',
        name: "Home",
        component: Home,
        meta: {
            layout: "Default"
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;