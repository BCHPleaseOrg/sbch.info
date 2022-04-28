import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

import About from '../views/About'
import XHedge from '../views/XHedge'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/xhedge',
        component: XHedge,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
