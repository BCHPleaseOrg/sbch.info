import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

import About from '../views/About'
import Address from '../views/Address'
import Blocks from '../views/Blocks'
import Transaction from '../views/Transaction'
import Validators from '../views/Validators'
import Verified from '../views/Verified'
import Verify from '../views/Verify'
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
        path: '/address/:address',
        component: Address,
    },
    {
        path: '/blocks',
        component: Blocks,
    },
    {
        path: '/transaction/:txid',
        component: Transaction,
    },
    {
        path: '/tx/:txid',
        component: Transaction,
    },
    {
        path: '/validators',
        component: Validators,
    },
    {
        path: '/verified',
        component: Verified,
    },
    {
        path: '/verify',
        component: Verify,
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
