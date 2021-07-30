import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Life from '../views/Life.vue'

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
]

const router = new VueRouter({
    routes
})

export default router
