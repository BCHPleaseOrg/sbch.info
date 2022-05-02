<template>
    <main class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
            <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>

        <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
                <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    Smart Contracts
                </h2>

                <p class="mt-3 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 sm:mt-4">
                    Browse our showcase of the MOST popular smart contracts being supported by the SmartBCH community.
                </p>
            </div>

            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                <div v-for="contract of contracts" :key="contract.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" :src="contract.banner" alt="" />
                    </div>

                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-indigo-600">
                                <a href="javascript://" class="hover:underline">
                                    {{contract.account}}
                                </a>
                            </p>

                            <a href="javascript://" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">
                                    {{contract.title}}
                                </p>

                                <small>
                                    {{contract.cat}}
                                    <span class="text-gray-700">( {{contract.verified.length ? 'Verified' : 'Not Verified' }} )</span>
                                </small>

                                <p class="mt-3 text-base text-gray-500">
                                    {{contract.description}}
                                </p>
                            </a>
                        </div>

                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a v-if="contract.web" :href="contract.web" target="_blank">
                                    <span class="sr-only">{{contract.title}}</span>

                                    <img class="h-10 w-10 rounded-full border-2 border-gray-300 shadow-lg" :src="contract.avatar" alt="" />
                                </a>
                                <a v-else>
                                    <span class="sr-only">{{contract.title}}</span>

                                    <img class="h-10 w-10 rounded-full border-2 border-gray-300 shadow-lg" :src="contract.avatar" alt="" />
                                </a>
                            </div>

                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a v-if="contract.web" :href="contract.web" target="_blank" class="hover:underline">
                                        {{contract.title}}
                                    </a>
                                    <a v-else class="">
                                        {{contract.title}}
                                    </a>
                                </p>

                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <a v-if="contract.web" :href="contract.web" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Web
                                    </a>
                                    <a v-else class="text-gray-500 font-bold">
                                        Web
                                    </a>

                                    <span class="mx-2 text-gray-500">|</span>

                                    <a v-if="contract.twitter" :href="contract.twitter" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Twitter
                                    </a>
                                    <a v-else class="text-gray-500 font-bold">
                                        Twitter
                                    </a>

                                    <span class="mx-2 text-gray-500">|</span>

                                    <a v-if="contract.readCash" :href="contract.readCash" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Read.cash
                                    </a>
                                    <a v-else class="text-gray-500 font-bold">
                                        Read.cash
                                    </a>

                                    <span v-if="contract.github" class="mx-2 text-gray-500">|</span>

                                    <a v-if="contract.github" :href="contract.github" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        GitHub
                                    </a>

                                    <span v-if="contract.gitlab" class="mx-2 text-gray-500">|</span>

                                    <a v-if="contract.gitlab" :href="contract.gitlab" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        GitLab
                                    </a>

                                    <span v-if="contract.stats" class="mx-2 text-gray-500">|</span>

                                    <a v-if="contract.stats" :href="contract.stats" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Stats
                                    </a>

                                    <span v-if="contract.blog" class="mx-2 text-gray-500">|</span>

                                    <a v-if="contract.blog" :href="contract.blog" target="_blank" class="text-blue-500 font-bold hover:underline">
                                        Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
/* Import components. */
// import HelloWorld from '@/components/HelloWorld'

export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            contracts: null,
        }
    },
    created: function () {
        /* Initialize contracts. */
        this.contracts = []

        this.contracts.push({
            id: 'c86fb956-5f92-4487-acd5-7b0058486f65',
            title: `Verse`,
            cat: 'Decentralized Exchange',
            account: '0x0',
            description: `ViaBTC serves users in 130+ countries around the world with tens of billions of dollars in cumulative mining output value, and provides professional mining service for BTC, ETH, LTC, etc.`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/W9MjFFT.png',
            banner: 'https://i.imgur.com/RVyUT1w.jpg',
            web: 'https://t.co/BxrlujJmXa',
            twitter: 'https://twitter.com/BitcoinCom',
            blog: '',
            stats: 'https://analytics.verse.bitcoin.com/',
        })

        this.contracts.push({
            id: 'e441bd27-4fe7-49b4-b0f7-a86b950bd681',
            title: `FlexUSD`,
            cat: 'Centralized Exchange',
            account: '0x0',
            description: `The first of its kind, flexUSD is fully backed and redeemable with USDC and pays interest 3 times a day on chain.`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/pOxJM3q.png',
            banner: 'https://i.imgur.com/1D0cpmz.png',
            web: 'https://flexusd.com/',
            twitter: '',
            blog: '',
        })

        this.contracts.push({
            id: '91b7eb5d-70b5-48a6-9c3d-ee6216c461d4',
            title: `TangoSwap`,
            cat: 'Decentralized Exchange',
            account: '0x0',
            description: `Trade, launch, stake, farm, invest, automate, build on the premier DeFi platform of smartBCH. Tango, Moves like Cash.`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/xfBsuIF.png',
            banner: 'https://i.imgur.com/zpfhMc6.png',
            web: 'https://tangoswap.cash/',
            github: 'https://github.com/tangoswap-cash',
            twitter: '',
            blog: '',
            readCash: '',
        })

        this.contracts.push({
            id: '60c13e6f-894e-4848-ab71-9cf20650ecf8',
            title: `ViaBTC`,
            cat: '???',
            account: '0x0',
            description: `ViaBTC serves users in 130+ countries around the world with tens of billions of dollars in cumulative mining output value, and provides professional mining service for BTC, ETH, LTC, etc.`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/LBncDdj.png',
            banner: 'https://i.imgur.com/8Z02k4g.png',
            web: '',
            twitter: '',
            blog: '',
        })

    },
    mounted: function () {
        //
    },
}
</script>
