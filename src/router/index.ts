import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Life from '../views/Life.vue'
import Directivas from "@/views/Directivas.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/life'
    },
    {
        path: '/life',
        name: 'Life',
        component: Life
    },
    {
        path: '/directivas',
        name: 'Directivas',
        component: Directivas
    },
]

const router = new VueRouter({
    routes
})

export default router
