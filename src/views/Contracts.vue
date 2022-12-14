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

                                <p class="three-lines mt-3 text-base text-gray-500">
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
                                        {{contract.producer || contract.title}}
                                    </a>
                                    <a v-else class="">
                                        {{contract.producer || contract.title}}
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
            id: '10fb9ce4-232e-49af-9d86-9b8545001a7f',
            title: `GoCrypto`,
            cat: 'Payment Network',
            account: '0x0',
            description: `GoCrypto operates as a global payment scheme connecting all the stakeholders interested in crypto ??? crypto users, crypto wallets, crypto exchanges, cashier system providers, payment solution providers and merchants.`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/J6jkrgn.png',
            banner: 'https://i.imgur.com/0SWyRRZ.png',
            web: 'https://gocrypto.com/',
            twitter: 'https://twitter.com/GoCrypto_',
            blog: 'https://medium.com/eligma-blog',
        })

        this.contracts.push({
            id: 'fd26ad66-e98c-48f5-9f4f-166aa8b728f4',
            title: `BlockNG Law Token`,
            producer: `BlockNG`,
            cat: 'Token',
            account: '0x0',
            description: `THE NEXT GENERATION SYNTHETIC CURRENCY`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/2Fbhu6U.png',
            banner: 'https://i.imgur.com/8Z3Aokr.jpg',
            web: 'https://blockng.money',
            twitter: 'https://mobile.twitter.com/blockngo',
            blog: 'https://medium.com/@blockng',
        })

        this.contracts.push({
            id: 'a5be01e4-e17c-4374-bd26-d3469bb6302a',
            title: `BenSwap - Green Ben (EBEN)`,
            producer: `BenSwap`,
            cat: 'Token',
            account: '0x77CB87b57F54667978Eb1B199b28a0db8C8E1c0B',
            description: `Green Ben (EBEN) is the utility and governance token of BenSwap (SmartBCH). Users need EBEN to use the features on BenSwap (SmartBCH).`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/micXrb3.png',
            banner: 'https://i.imgur.com/rn1GRhS.png',
            web: 'https://docs.benswap.cash/tokenomics/green-ben-eben',
            twitter: 'https://twitter.com/BenTokenFinanc1',
            blog: '',
            github: 'https://github.com/BenTokenFinance',
        })

        this.contracts.push({
            id: '5166d86b-9008-4c90-a296-b5f587952f45',
            title: `CashCats`,
            cat: 'Token',
            account: '0x265bd28d79400d55a1665707fa14a72978fa6043',
            description: `Ultimately, CashCats aims to be an extension of the BCH peer-to-peer electronic cash movement & a mascot for the BCH community. We love $CATS! `,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/pGGocRN.png',
            banner: 'https://i.imgur.com/cWqnVn7.png',
            web: 'https://cashcats.org/',
            twitter: 'https://twitter.com/CashCatsBCH',
            blog: '',
        })

        this.contracts.push({
            id: 'd1c285c5-27e9-4a38-a3df-7bffea78eadb',
            title: `MistSwap`,
            cat: 'Decentralized Exchange',
            account: '0x0',
            description: `We are building tools that enable people to interact permissionlessly, without borders. Only with Bitcoin Cash.`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/VFRaVrX.png',
            banner: 'https://i.imgur.com/GZEluwg.png',
            web: 'https://mistswap.fi/',
            twitter: 'https://twitter.com/mistswapdex',
            github: 'https://github.com/mistswapdex',
            blog: '',
        })

        this.contracts.push({
            id: '342a308c-16c6-4133-8db1-ab5d613291ec',
            title: `Bitcoin Cash Name Service (LNS)`,
            cat: 'Protocol',
            account: '0x0',
            description: `The Bitcoin Cash Name Service (LNS) is a distributed, open, and extensible naming system based on the smartBCH blockchain. It is a fork of the ENS project.`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/fwURHdf.png',
            banner: 'https://i.imgur.com/xpv0LXC.png',
            web: 'https://bch.domains/',
            twitter: 'https://twitter.com/bchdomains',
            github: 'https://github.com/bchdomains',
            blog: '',
        })

        this.contracts.push({
            id: '4628c9e9-6045-450c-96c2-2e185d3d404f',
            title: `Joystick Club`,
            cat: 'GameFi',
            account: '0x6732E55Ac3ECa734F54C26Bd8DF4eED52Fb79a6E',
            description: `Play games and earn crypto with Joystick.club. The first blockchain arcade on smartBCH, a low fee sidechain for the Bitcoin Cash network. We brought the vintage arcade into the modern era.`,
            verified: [],
            audits: [],
            avatar: 'https://i.imgur.com/8qU9Kx7.png',
            banner: 'https://i.imgur.com/Y4DSVM8.png',
            web: 'https://smart.joystick.club/',
            twitter: '',
            blog: 'https://blog.joystick.club/',
        })

    },
    mounted: function () {
        //
    },
}
</script>
