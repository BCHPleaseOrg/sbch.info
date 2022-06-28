import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

import About from '../views/About'
import Address from '../views/Address'

import Blocks from '../views/Blocks'
import BlockDetails from '../views/BlockDetails'

import Contracts from '../views/Contracts'
import Search from '../views/Search'
import Sponsors from '../views/Sponsors'
import Terms from '../views/Terms'
import Transaction from '../views/Transaction'
import Validators from '../views/Validators'
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
        path: '/blocks/:blockid',
        component: BlockDetails,
    },
    {
        path: '/contracts',
        component: Contracts,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/sponsors',
        component: Sponsors,
    },
    {
        path: '/tos',
        component: Terms,
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
